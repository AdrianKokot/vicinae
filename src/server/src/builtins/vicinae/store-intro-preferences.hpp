#pragma once
#include <QCoreApplication>
#include "command/preference-schema.hpp"

struct StoreIntroPreferences {
  bool alwaysShowIntro = false;
};

template <> struct PreferenceSchema<StoreIntroPreferences> {
  PreferenceMeta alwaysShowIntro{
      .label = QCoreApplication::translate("StoreIntroPreferences", "Always show intro")};
};
