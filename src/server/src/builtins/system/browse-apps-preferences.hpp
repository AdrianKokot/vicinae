#pragma once
#include <QCoreApplication>
#include "command/preference-schema.hpp"

struct BrowseAppsPreferences {
  bool sortAlphabetically = true;
  bool showHidden = false;
};

template <> struct PreferenceSchema<BrowseAppsPreferences> {
  PreferenceMeta sortAlphabetically{
      .label = QCoreApplication::translate("BrowseAppsPreferences", "Sort alphabetically")};
  PreferenceMeta showHidden{.label =
                                QCoreApplication::translate("BrowseAppsPreferences", "Show hidden apps")};
};
