#pragma once
#include <QCoreApplication>
#include <string>
#include "command/preference-schema.hpp"
#include "command/typed-command.hpp"
#include "services/snippet/snippet-service.hpp"
#include "ui/image/url.hpp"
#include "create-snippet-command.hpp"
#include "manage-snippets-command.hpp"

struct SnippetPreferences {
  bool enabled = true;
  bool undo = true;
#ifdef Q_OS_LINUX
  std::string layout;
  int prePasteDelay = SnippetService::DEFAULT_PRE_PASTE_DELAY_MS;
  int keyDelay = SnippetService::DEFAULT_KEY_DELAY_US / 1000;
#endif
};

template <> struct PreferenceSchema<SnippetPreferences> {
  PreferenceMeta enabled{
      .title = QCoreApplication::translate("SnippetPreferences", "Expansion"),
      .description = QCoreApplication::translate(
          "SnippetPreferences", "Enable automatic snippet expansion when triggers are typed"),
  };
  PreferenceMeta undo{
      .title = QCoreApplication::translate("SnippetPreferences", "Undo"),
      .description = QCoreApplication::translate(
          "SnippetPreferences",
          "Press backspace immediately after expansion to undo and restore the trigger text"),
  };
#ifdef Q_OS_LINUX
  PreferenceMeta layout{
      .title = QCoreApplication::translate("SnippetPreferences", "Keyboard layout"),
      .description = QCoreApplication::translate(
          "SnippetPreferences",
          R"(XKB layout used for trigger detection (e.g. "us", "fr"). Leave empty for system default.)"),
      .required = false,
  };
  PreferenceMeta prePasteDelay{
      .title = QCoreApplication::translate("SnippetPreferences", "Pre-paste delay (ms)"),
      .description = QCoreApplication::translate(
          "SnippetPreferences",
          "Delay between setting clipboard and injecting paste shortcut. Increase if expansions "
          "paste empty on slow compositors."),
      .required = false,
  };
  PreferenceMeta keyDelay{
      .title = QCoreApplication::translate("SnippetPreferences", "Key injection delay (ms)"),
      .description = QCoreApplication::translate(
          "SnippetPreferences",
          "Delay between injected key events. Increase if expansions produce missing or garbled "
          "characters on slow compositors."),
      .required = false,
  };
#endif
};

class SnippetExtension : public TypedCommandRepository<SnippetPreferences> {
  Q_DECLARE_TR_FUNCTIONS(SnippetExtension)
  QString id() const override { return "snippets"; }
  QString displayName() const override { return tr("Snippets"); }
  QString description() const override { return tr("Text expansion and snippet management"); }
  ImageURL iconUrl() const override {
    return ImageURL(BuiltinIcon::Snippets).setBackgroundTint(SemanticColor::Orange);
  }

  void initialized(const SnippetPreferences &preferences) const override;
  void preferencesChanged(const SnippetPreferences &preferences) const override;

public:
  SnippetExtension() {
    registerCommand<CreateSnippetCommand>();
    registerCommand<ManageSnippetsCommand>();
  }
};
