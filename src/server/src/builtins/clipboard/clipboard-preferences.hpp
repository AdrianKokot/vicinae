#pragma once
#include <chrono>
#include <optional>
#include <string>
#include <vector>
#include <glaze/core/common.hpp>
#include <glaze/core/meta.hpp>
#include <QCoreApplication>
#include "builtins/clipboard/history/clipboard-history-model.hpp"
#include "command/preference-schema.hpp"
#include "service-registry.hpp"
#include "services/paste/paste-service.hpp"

enum class ClipboardEviction { Never, FifteenMinutes, OneHour, OneDay, OneWeek, OneMonth, OneYear };

template <> struct glz::meta<ClipboardEviction> {
  using enum ClipboardEviction;
  static constexpr auto value =
      glz::enumerate("never", Never, "900", FifteenMinutes, "3600", OneHour, "86400", OneDay, "604800",
                     OneWeek, "2592000", OneMonth, "31536000", OneYear);
};

template <> struct glz::meta<ClipboardHistorySection::DefaultAction> {
  using enum ClipboardHistorySection::DefaultAction;
  static constexpr auto value = glz::enumerate("copy", Copy, "paste", Paste);
};

inline std::optional<std::chrono::seconds> evictionThreshold(ClipboardEviction eviction) {
  using namespace std::chrono_literals;
  switch (eviction) {
  case ClipboardEviction::Never:
    return std::nullopt;
  case ClipboardEviction::FifteenMinutes:
    return 15min;
  case ClipboardEviction::OneHour:
    return 1h;
  case ClipboardEviction::OneDay:
    return 24h;
  case ClipboardEviction::OneWeek:
    return 24h * 7;
  case ClipboardEviction::OneMonth:
    return 24h * 30;
  case ClipboardEviction::OneYear:
    return 24h * 365;
  }
  return std::nullopt;
}

struct ClipboardPreferences {
  bool monitoring = true;
#ifndef Q_OS_MACOS
  bool ignorePasswords = true;
#endif
  bool preserveTagged = true;
  std::vector<std::string> ignoredApps;
  ClipboardEviction evictionThreshold = ClipboardEviction::Never;
  bool eraseOnStartup = false;
};

template <> struct PreferenceSchema<ClipboardPreferences> {
  PreferenceMeta monitoring{
      .title = QCoreApplication::translate("ClipboardPreferences", "Clipboard monitoring"),
      .description = QCoreApplication::translate(
          "ClipboardPreferences", "Whether new clipboard selections are appended to the history"),
  };
#ifndef Q_OS_MACOS
  PreferenceMeta ignorePasswords{
      .title = QCoreApplication::translate("ClipboardPreferences", "Ignore Passwords"),
      .description = QCoreApplication::translate(
          "ClipboardPreferences",
          "Ignore selections that can be identified as a password. May not work with all apps."),
  };
#endif
  PreferenceMeta preserveTagged{
      .title = QCoreApplication::translate("ClipboardPreferences", "Preserve tagged"),
      .description = QCoreApplication::translate(
          "ClipboardPreferences",
          "Never evict or mass delete selections that have been explicitly tagged (pinned, "
          "custom keyword)"),
  };
  PreferenceMeta ignoredApps{
      .title = QCoreApplication::translate("ClipboardPreferences", "Excluded apps"),
      .description = QCoreApplication::translate(
          "ClipboardPreferences", "Never add selections copied from these apps to the history"),
      .kind = PreferenceMeta::Kind::Apps,
      .required = false,
  };
  PreferenceMeta evictionThreshold{
      .title = QCoreApplication::translate("ClipboardPreferences", "Eviction threshold"),
      .description = QCoreApplication::translate("ClipboardPreferences",
                                                 "Automatically delete selections older than this threshold"),
      .options =
          [] {
            return std::vector<Preference::DropdownData::Option>{
                option(ClipboardEviction::Never,
                       QCoreApplication::translate("ClipboardPreferences", "Never")),
                option(ClipboardEviction::FifteenMinutes,
                       QCoreApplication::translate("ClipboardPreferences", "15 minutes")),
                option(ClipboardEviction::OneHour,
                       QCoreApplication::translate("ClipboardPreferences", "1 hour")),
                option(ClipboardEviction::OneDay,
                       QCoreApplication::translate("ClipboardPreferences", "1 day")),
                option(ClipboardEviction::OneWeek,
                       QCoreApplication::translate("ClipboardPreferences", "1 week")),
                option(ClipboardEviction::OneMonth,
                       QCoreApplication::translate("ClipboardPreferences", "1 month")),
                option(ClipboardEviction::OneYear,
                       QCoreApplication::translate("ClipboardPreferences", "1 year")),
            };
          },
  };
  PreferenceMeta eraseOnStartup{
      .title = QCoreApplication::translate("ClipboardPreferences", "Erase on startup"),
      .description = QCoreApplication::translate(
          "ClipboardPreferences", "Erase clipboard history every time the vicinae server is started"),
  };
};

struct ClipboardHistoryPreferences {
  ClipboardHistorySection::DefaultAction defaultAction = ClipboardHistorySection::DefaultAction::Paste;
};

template <> struct PreferenceSchema<ClipboardHistoryPreferences> {
  PreferenceMeta defaultAction{
      .title = QCoreApplication::translate("ClipboardHistoryPreferences", "Default Action"),
      .description = QCoreApplication::translate(
          "ClipboardHistoryPreferences",
          "The default action to perform on pressing return. Paste is only available if your "
          "environment supports it."),
      .options =
          [] {
            using Action = ClipboardHistorySection::DefaultAction;
            std::vector<Preference::DropdownData::Option> options;
            if (ServiceRegistry::instance()->pasteService()->supportsPaste()) {
              options.emplace_back(
                  option(Action::Paste, QCoreApplication::translate("ClipboardHistoryPreferences", "Paste")));
            }
            options.emplace_back(
                option(Action::Copy, QCoreApplication::translate("ClipboardHistoryPreferences", "Copy")));
            return options;
          },
  };
};
