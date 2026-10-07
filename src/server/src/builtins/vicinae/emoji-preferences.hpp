#pragma once
#include <string>
#include <vector>
#include <glaze/core/common.hpp>
#include <glaze/core/meta.hpp>
#include <QCoreApplication>
#include "command/preference-schema.hpp"
#include "glyph/emoji.hpp"
#include "service-registry.hpp"
#include "services/paste/paste-service.hpp"
#include "utils.hpp"

enum class EmojiDefaultAction { Copy, Paste };

template <> struct glz::meta<EmojiDefaultAction> {
  using enum EmojiDefaultAction;
  static constexpr auto value = glz::enumerate("copy", Copy, "paste", Paste);
};

struct EmojiPreferences {
  EmojiDefaultAction defaultAction = EmojiDefaultAction::Paste;
  std::string skinTone = "default";
};

template <> struct PreferenceSchema<EmojiPreferences> {
  PreferenceMeta defaultAction{
      .title = QCoreApplication::translate("EmojiPreferences", "Default Action"),
      .description = QCoreApplication::translate(
          "EmojiPreferences",
          "The default action to perform on pressing return. Paste is only available if your "
          "environment supports it."),
      .options =
          [] {
            std::vector<Preference::DropdownData::Option> options;
            if (ServiceRegistry::instance()->pasteService()->supportsPaste()) {
              options.emplace_back(option(EmojiDefaultAction::Paste,
                                          QCoreApplication::translate("EmojiPreferences", "Paste")));
            }
            options.emplace_back(
                option(EmojiDefaultAction::Copy, QCoreApplication::translate("EmojiPreferences", "Copy")));
            return options;
          },
  };
  PreferenceMeta skinTone{
      .title = QCoreApplication::translate("EmojiPreferences", "Skin tone"),
      .description = QCoreApplication::translate("EmojiPreferences", "Skin tone to use for relevant emojis."),
      .options =
          [] {
            std::vector<Preference::DropdownData::Option> options;
            options.reserve(emoji::skinTones().size());
            for (const auto &info : emoji::skinTones()) {
              options.emplace_back(Preference::DropdownData::Option{
                  QString("%1 %2")
                      .arg(qStringFromStdView(emoji::applySkinTone("👍", info.tone)))
                      .arg(qStringFromStdView(info.displayName)),
                  qStringFromStdView(info.id),
              });
            }
            return options;
          },
  };
};
