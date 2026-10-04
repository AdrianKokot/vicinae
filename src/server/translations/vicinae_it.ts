<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="it">
<context>
    <name>AboutSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/AboutSettingsPage.qml" line="+61"/>
        <source>Version %1 - Commit %2
(%3)</source>
        <translation>Versione %1 - Commit %2
(%3)</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Documentation</source>
        <translation>Documentazione</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Report a Bug</source>
        <translation>Segnala un bug</translation>
    </message>
</context>
<context>
    <name>ActionListPanel</name>
    <message>
        <location filename="../src/ui/qml/actions/ActionListPanel.qml" line="+116"/>
        <source>No matching actions</source>
        <translation>Nessuna corrispondenza</translation>
    </message>
    <message>
        <location line="+136"/>
        <source>Filter actions...</source>
        <translation>Filtra le azioni...</translation>
    </message>
</context>
<context>
    <name>AdvancedSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/AdvancedSettingsPage.qml" line="+35"/>
        <source>Input &amp; Navigation</source>
        <translation>Input e Navigazione</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Pop on backspace</source>
        <translation>Cancella col tasto indietro</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pop back in navigation on backspace when no input is present.</source>
        <translation>Torna alla schermata precedente col tasto indeitro quando l’input è vuoto.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Activate on single click</source>
        <translation>Attiva con un singolo click</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Activate items with a single click instead of requiring a double click.</source>
        <translation>Attiva gli elementi con un click singolo invece di richiedere un doppio click.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Wrap navigation</source>
        <translation>Navigazione circolare</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Wrap around to the opposite end when moving past the first or last item.</source>
        <translation>Torna all’estremità opposta oltre il primo o l’ultimo elemento.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>IME handling</source>
        <translation>Gestione dell’IME</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Include IME Preedit strings as part of search queries.</source>
        <translation>Includi le stringhe pre-modifica IME come parte delle ricerche.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Keybinding Scheme</source>
        <translation>Schema per le scorciatoie da tastiera</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Default uses the standard macOS keys (arrows, Ctrl+N/P); Vim uses Ctrl+J/K and Ctrl+H/L; Emacs uses Ctrl+N/P and Ctrl+Opt+B/F for navigation, plus Emacs editing in the search bar.</source>
        <translation>Di default usa i tasti standard di macOS (frecce, Ctrl+N/P) ; Vim usa Ctrl+J/K e Ctrl+H/L ; Emacs usa Ctrl+N/P e Ctrl+Opt+B/F per la navigazione, oltre alla modifica Emacs nella barra di ricerca.</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Default and Vim use Ctrl+J/K and Ctrl+H/L; Emacs uses Ctrl+N/P and Ctrl+Alt+B/F for navigation, plus Emacs editing in the search bar.</source>
        <translation>Default e Vim usano Ctrl+J/K e Ctrl+H/L ; Emacs usa Ctrl+N/P e Ctrl+Alt+B/F per la navigazione, oltre alla modifica Emacs nella barra di ricerca.</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Search</source>
        <translation>Ricerca</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Root file search</source>
        <translation>Cerca file</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Files are searched asynchronously, so if enabled you should expect a slight delay for file search results to show up.</source>
        <translation>La ricerca di file avviene in modo asincrono : se la attivi, aspettati un leggero ritardo prima che i risultati appaiano.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Favicon Fetching</source>
        <translation>Recupero Favicon</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The favicon provider used to load favicons where needed. Select &apos;None&apos; to turn off favicon loading.</source>
        <translation>Il fornitore favicon usato per caricare le favicon necessarie. Scegli ’Nessuno’ per disattivarne completamente il caricamento.</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>System</source>
        <translation>Sistema</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Input server</source>
        <translation>Server di input</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Whether to spawn the input server at startup. This needs to be enabled in order to support snippets, paste to active window, and other features that require input monitoring or injection.</source>
        <translation>Indica se il server di input viene creato all’avvio. Deve essere attivo per poter usare snippet, incollare nella finestra attiva ed altre funzioni che richiedono il monitoraggio o l’inserimento di input.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Tray icon</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show the Vicinae icon in the system tray. You may need to restart Vicinae.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Security</source>
        <translation>Sicurezza</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Encrypt sensitive data</source>
        <translation>Cifra dati sensibili</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Encrypt sensitive data at rest, such as clipboard history and internal databases (OAuth tokens, extension local storage, API keys). Note that some components, such as on-disk clipboard history, may not be retroactively affected when toggling this option. Turning on this option may ask you to unlock your keychain. Requires a restart in order to apply.</source>
        <translation>Cifra i dati sensibili a riposo, come la cronologia degli appunti e vari database interni (token OAuth, dati locali delle estensioni, chiavi API). Alcuni componenti, come la cronologia degli appunti sul disco, potrebbero non essere retroattivamente modificati. Attivare quest’opzione potrebbe chiederti di sbloccare il portachiavi. Richiede un riavvio per essere applicato.</translation>
    </message>
</context>
<context>
    <name>AlertWidget</name>
    <message>
        <location filename="../src/ui/alert/alert.hpp" line="+15"/>
        <source>Are you sure?</source>
        <translation>Sei sicuro/a?</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>This action cannot be undone</source>
        <translation>Questa azione è irreversibile</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Confirm</source>
        <translation>Conferma</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cancel</source>
        <translation>Annulla</translation>
    </message>
</context>
<context>
    <name>AliasFormView</name>
    <message>
        <location filename="../src/ui/qml/views/AliasFormView.qml" line="+16"/>
        <source>Alias</source>
        <translation>Alias</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Additional words to index this item against</source>
        <translation>Parole aggiuntive con cui indicizzare</translation>
    </message>
</context>
<context>
    <name>AliasFormViewHost</name>
    <message>
        <location filename="../src/builtins/root/alias-form-view-host.cpp" line="+27"/>
        <source>Set alias - %1</source>
        <translation>Definisci l’alias - %1</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Submit</source>
        <translation>Conferma</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Alias modified</source>
        <translation>Alias modificato</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to modify alias</source>
        <translation>Impossibile modificare l’alias</translation>
    </message>
</context>
<context>
    <name>AppRootItem</name>
    <message>
        <location filename="../src/root-search/apps/app-root-provider.cpp" line="+18"/>
        <location line="+24"/>
        <source>Application</source>
        <translation>Applicazione</translation>
    </message>
    <message>
        <location line="-9"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Where</source>
        <translation>Posizionamento</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Opens in terminal</source>
        <translation>Si apre in un terminale</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Yes</source>
        <translation>Si</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>No</source>
        <translation>No</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Open Application</source>
        <translation>Apri Applicazione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Copy App ID</source>
        <translation>Copia l’ID dell’applicazione</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy App Location</source>
        <translation>Copia la posizione dell’app</translation>
    </message>
</context>
<context>
    <name>AppRootProvider</name>
    <message>
        <location line="+89"/>
        <source>Applications</source>
        <translation>Applicazioni</translation>
    </message>
</context>
<context>
    <name>AppSelectorModel</name>
    <message>
        <location filename="../src/ui/views/app-selector-model.cpp" line="+18"/>
        <location line="+49"/>
        <source>%1 (Default)</source>
        <translation>%1 (di default)</translation>
    </message>
</context>
<context>
    <name>AppearanceSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/AppearanceSettingsPage.qml" line="+35"/>
        <location line="+7"/>
        <source>Theme</source>
        <translation>Tema</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Font</source>
        <translation>Font</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Font size</source>
        <translation>Dimensione del testo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The base point size used to compute font sizes. Fractional values are accepted. Recommended range is [10.0;12.0].</source>
        <translation>Il numero base di punti usato per calcolare la dimensione del testo. I valori decimali sono accettati. Si consiglia di restare tra 10.0 e 12.0.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>e.g. 11</source>
        <translation>es. 11</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Icon Theme</source>
        <translation>Tema delle icone</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The icon theme used for system icons (applications, mime types, folder icons...). Does not affect builtin Vicinae icons.</source>
        <translation>Il tema delle icone usato per le icone di sistema (applicazioni, tipi MIME, cartelle...). Non cambia le icone di Vicinae.</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Window</source>
        <translation>Finestra</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Window material</source>
        <translation>Materiale della finestra</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Background material applied to the launcher window. Lower the window opacity to see it.</source>
        <translation>Materiale di sfondo usato per la finestra del launcher. Riduci l’opacità della finestra per vederlo.</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Window opacity</source>
        <translation>Opacità della finestra</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>e.g. 1.0</source>
        <translation>es. 1.0</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Compact mode</source>
        <translation>Modalità compatta</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show only the search bar at root; expand when a query is entered.</source>
        <translation>Inizialmente mostra solo la barra di ricerca, si espande appena scrivi qualcosa.</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Floating status bar</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Let the status bar float over the content, which stays slightly visible under it. Disable to keep the content strictly above the status bar.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Use layer shell</source>
        <translation>Utilizza layer shell</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Anchor the launcher as a Wayland layer surface (wlr-layer-shell) instead of a regular window. May require reopening Vicinae to fully apply.</source>
        <translation>Ancora il launcher come superficie layer Wayland (wlr-layer-shell) piuttosto che una finestra. Potrebbe essere necessario riaprire Vicinae per applicare.</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Client-side decorations</source>
        <translation>Decorazioni lato client</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Let Vicinae draw its own rounded borders and shadow instead of relying on the windowing system.</source>
        <translation>Permetti a Vicinae di disegnare i propri bordi arrotondati e ombre invece di dipendere dal sistema sottostante.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Corner rounding</source>
        <translation>Arrotondamento bordi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Radius of the launcher window corners, in pixels.</source>
        <translation>Raggio degli ancoli del launcher, in pixel.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>e.g. 10</source>
        <translation>es. 10</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Border width</source>
        <translation>Spessore del bordo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Thickness of the launcher window border, in pixels.</source>
        <translation>Spessore del bordo del launcher, in pixel.</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>e.g. 3</source>
        <translation>es. 3</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Shadow size</source>
        <translation>Dimensione dell’ombra</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Size of the drop shadow cast by the launcher window, in pixels.</source>
        <translation>Dimensione dell’ombra del launcher, in pixel.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>e.g. 12</source>
        <translation>es. 12</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Native font rendering</source>
        <translation>Rendering del testo nativo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Use the platform&apos;s native text rendering for system-consistent text. Disable for Qt distance-field rendering (usually faster). May require reopening Vicinae to fully apply.</source>
        <translation>Utilizza il rendering del testo nativo della piattaforma per coerenza. Disabilita per utilizzare il rendering Qt (generalmente più veloce). Potrebbe essere necessario riaprire Vicinae per applicare.</translation>
    </message>
</context>
<context>
    <name>AppleShortcutRootItem</name>
    <message>
        <location filename="../src/root-search/apple-shortcuts/apple-shortcut-root-provider.cpp" line="+66"/>
        <location line="+3"/>
        <source>Apple Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AppleShortcutRootProvider</name>
    <message>
        <location line="+30"/>
        <source>Could not load Apple Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Apple Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AppleShortcuts</name>
    <message>
        <location filename="../src/services/apple-shortcuts/apple-shortcuts.mm" line="+36"/>
        <source>Allow Vicinae to control Shortcuts Events in System Settings &gt; Privacy &amp; Security &gt; Automation.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+31"/>
        <location line="+40"/>
        <source>Shortcuts Events is unavailable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-30"/>
        <source>Could not read Apple Shortcuts.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>AvailableFallbackSection</name>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-model.hpp" line="+49"/>
        <source>Available</source>
        <translation>Disponibili</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-model.cpp" line="+50"/>
        <source>Enable fallback</source>
        <translation>Abilità fallback</translation>
    </message>
</context>
<context>
    <name>BringToWorkspaceAction</name>
    <message>
        <location filename="../src/actions/window-actions.hpp" line="+72"/>
        <source>Bring to current workspace</source>
        <translation>Porta allo spazio di lavoro attuale</translation>
    </message>
</context>
<context>
    <name>BrowseAppsSection</name>
    <message>
        <location filename="../src/builtins/system/browse-apps-model.hpp" line="+32"/>
        <source>Applications ({count})</source>
        <translation>Applicazioni ({count})</translation>
    </message>
    <message>
        <location filename="../src/builtins/system/browse-apps-model.cpp" line="+19"/>
        <source>Hidden</source>
        <translation>Nascosto</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Open Application</source>
        <translation>Apri l’Applicazionie</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Copy App ID</source>
        <translation>Copia l’ID dell’Applicazione</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy App Location</source>
        <translation>Copia la posizione dell’Applicazione</translation>
    </message>
</context>
<context>
    <name>BrowseAppsViewHost</name>
    <message>
        <location filename="../src/builtins/system/browse-apps-view-host.cpp" line="+13"/>
        <source>Search apps...</source>
        <translation>Cerca app...</translation>
    </message>
</context>
<context>
    <name>BrowseFontsCommand</name>
    <message>
        <location filename="../src/builtins/font/browse-fonts-command.hpp" line="+8"/>
        <source>Search Fonts</source>
        <translation>Cerca Font</translation>
    </message>
</context>
<context>
    <name>BrowserExtension</name>
    <message>
        <location filename="../src/builtins/browser/browser-extension.hpp" line="+12"/>
        <source>Browser Extension</source>
        <translation>Estensione del Browser</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Browser extension related commands.</source>
        <translation>Comandi relativi all’estensione.</translation>
    </message>
</context>
<context>
    <name>BrowserTabActionGenerator</name>
    <message>
        <location filename="../src/actions/browser-tab-actions.hpp" line="+24"/>
        <source>Switch to tab</source>
        <translation>Apri scheda</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Convert to shortcut</source>
        <translation>Converti in scorciatoia</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Close tab</source>
        <translation>Chiudi scheda</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to close tab: %1</source>
        <translation>Impossibile chiudere la scheda: %1</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy URL</source>
        <translation>Copia l’URL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Copy Title</source>
        <translation>Copia il Titolo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Copy ID</source>
        <translation>Copia l’ID</translation>
    </message>
</context>
<context>
    <name>BrowserTabProvider</name>
    <message>
        <location filename="../src/root-search/browser-tabs/browser-tabs-provider.hpp" line="+69"/>
        <source>Browser Tabs</source>
        <translation>Schede del Browser</translation>
    </message>
</context>
<context>
    <name>BrowserTabRootItem</name>
    <message>
        <location line="-51"/>
        <source>Browser Tab</source>
        <translation>Scheda del Browser</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Tab</source>
        <translation>Scheda</translation>
    </message>
</context>
<context>
    <name>BrowserTabsSection</name>
    <message>
        <location filename="../src/builtins/browser/browser-tabs-model.hpp" line="+22"/>
        <source>Tabs ({count})</source>
        <translation>Schede ({count})</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Playing Media ({count})</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/builtins/browser/browser-tabs-model.cpp" line="+13"/>
        <source>Muted</source>
        <translation>Silenziata</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Playing</source>
        <translation>In riproduzione</translation>
    </message>
</context>
<context>
    <name>BrowserTabsViewHost</name>
    <message>
        <location filename="../src/builtins/browser/browser-tabs-view-host.cpp" line="+12"/>
        <source>Search, focus and close tabs</source>
        <translation>Cerca, attiva e chiudi schede</translation>
    </message>
</context>
<context>
    <name>BuiltinIconsSection</name>
    <message>
        <location filename="../src/builtins/vicinae/builtin-icons-model.hpp" line="+20"/>
        <source>Icons ({count})</source>
        <translation>Icone ({count})</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/builtin-icons-model.cpp" line="+15"/>
        <source>Copy Icon Name</source>
        <translation>Copia il nome dell’icona</translation>
    </message>
</context>
<context>
    <name>BuiltinIconsViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/builtin-icons-view-host.cpp" line="+10"/>
        <source>Search icons...</source>
        <translation>Cerca icone...</translation>
    </message>
</context>
<context>
    <name>CalcHistoryListView</name>
    <message>
        <location filename="../src/ui/qml/views/CalcHistoryListView.qml" line="+13"/>
        <source>No results</source>
        <translation>Nessun risultato</translation>
    </message>
</context>
<context>
    <name>CalcHistorySection</name>
    <message>
        <location filename="../src/builtins/calculator/calc-history-model.cpp" line="+39"/>
        <source>Copy answer</source>
        <translation>Copia risposta</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy question</source>
        <translation>Copia domanda</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy question and answer</source>
        <translation>Copia domanda e risposta</translation>
    </message>
</context>
<context>
    <name>CalcHistoryViewHost</name>
    <message>
        <location filename="../src/builtins/calculator/calc-history-view-host.cpp" line="+92"/>
        <source>Search past calculations...</source>
        <translation>Cerca nei calcoli precedenti...</translation>
    </message>
</context>
<context>
    <name>CalcLiveSection</name>
    <message>
        <location filename="../src/builtins/calculator/calc-history-view-host.hpp" line="+28"/>
        <source>Calculator</source>
        <translation>Calcolatrice</translation>
    </message>
    <message>
        <location filename="../src/builtins/calculator/calc-history-view-host.cpp" line="-14"/>
        <source>Copy unformatted answer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CalculatorExtension</name>
    <message>
        <location filename="../src/builtins/calculator/calculator-extension.hpp" line="+94"/>
        <source>Calculator</source>
        <translation>Calcolatrice</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Do maths, convert units or search past calculations...</source>
        <translation>Fai calcoli, converti unità di misura o cerca calcoli precedenti...</translation>
    </message>
</context>
<context>
    <name>CalculatorHistoryCommand</name>
    <message>
        <location line="-77"/>
        <source>Calculator history</source>
        <translation>Cronologia calcolatrice</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browse past calculations. You need to copy the result of a calculation for it to be saved in history.</source>
        <translation>Cerca nei calcoli precedenti. Vengono salvati nella cronologia solo i risultati che sono stati copiati.</translation>
    </message>
</context>
<context>
    <name>CalculatorRefreshRatesCommand</name>
    <message>
        <location line="+11"/>
        <source>Refresh Exchange Rates</source>
        <translation>Aggiorna i tassi di cambio</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Refresh exchange rates used by the calculator to provide currency conversion features. Not all backends may support currency conversions or manually refreshing the rates.</source>
        <translation>Aggiorna i tassi di cambio della calcolatrice per cambi più precisi. Alcuni backend potrebbero non supportare il cambio valuta o l’aggiornamento manuale dei tassi.</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>%1 can&apos;t refresh rates</source>
        <translation>%1 non ha potuto aggiornare i tassi</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Refreshing rates...</source>
        <translation>Aggiornamento dei tassi...</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Rates successfully refreshed</source>
        <translation>Tassi aggiornati con successo</translation>
    </message>
</context>
<context>
    <name>CalculatorResultDelegate</name>
    <message>
        <location filename="../src/ui/qml/list/CalculatorResultDelegate.qml" line="+61"/>
        <source>Expression</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+59"/>
        <source>Result</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CalculatorService</name>
    <message>
        <location filename="../src/services/calculator-service/calculator-service.cpp" line="+125"/>
        <source>Pinned</source>
        <translation>Appesi</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Today</source>
        <translation>Oggi</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>This week</source>
        <translation>Questa settimana</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>This month</source>
        <translation>Questo mesed</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>This year</source>
        <translation>Quest anno</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>A few years ago</source>
        <translation>Qualche anno fa</translation>
    </message>
</context>
<context>
    <name>ChangeEmojiSkinToneAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="+102"/>
        <source>%1 skin tone</source>
        <translation>Colore della pelle %1</translation>
    </message>
</context>
<context>
    <name>ClearClipboardHistoryCommand</name>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-extension.cpp" line="+37"/>
        <source>Clear Clipboard History</source>
        <translation>Cancella Cronologia Appunti</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clear the clipboard history</source>
        <translation>Cancella la Cronologia degli Appunti</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Are you sure?</source>
        <translation>Sei sicuro/a?</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Your clipboard history will be gone forever :(</source>
        <translation>La cronologia degli appunti sarà persa per sempre :(</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to clear clipboard history</source>
        <translation>Impossibile cancellare la cronologia degli appunti</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Clipboard history cleared</source>
        <translation>Cronologia degli appunti eliminata</translation>
    </message>
</context>
<context>
    <name>ClipboardClearCommand</name>
    <message>
        <location line="-43"/>
        <source>Clear Current Clipboard Data</source>
        <translation>Cancella Dati negli Appunti</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clear the current content of the clipboard</source>
        <translation>Cancella i dati attualmente copiati negli appunti</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to clear clipboard</source>
        <translation>Impossibile cancellare gli appunti</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Clipboard cleared</source>
        <translation>Appunti eliminati</translation>
    </message>
</context>
<context>
    <name>ClipboardExtension</name>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-extension.hpp" line="+13"/>
        <source>Clipboard</source>
        <translation>Appunti</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>System clipboard integration</source>
        <translation>Integrazione con gli appunti di sistema</translation>
    </message>
</context>
<context>
    <name>ClipboardHistoryCommand</name>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-history-command.hpp" line="+12"/>
        <source>Clipboard History</source>
        <translation>Cronologia Appunti</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browse your clipboard&apos;s history, pin, edit and remove entries.</source>
        <translation>Naviga la cronologia dei tuoi appunti. Appenti, elimina e modifica singoli elementi.</translation>
    </message>
</context>
<context>
    <name>ClipboardHistorySection</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-model.cpp" line="+73"/>
        <source>Open Settings</source>
        <translation>Apri Impostazioni</translation>
    </message>
</context>
<context>
    <name>ClipboardHistoryView</name>
    <message>
        <location filename="../src/ui/qml/views/ClipboardHistoryView.qml" line="+205"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Size</source>
        <translation>Dimensione</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copied at</source>
        <translation>Copiato in</translation>
    </message>
    <message>
        <location line="+47"/>
        <source>Preview not available for this content type</source>
        <translation>Anteprima non disponibible per questo contenuto</translation>
    </message>
</context>
<context>
    <name>ClipboardHistoryViewHost</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-view-host.hpp" line="+95"/>
        <source>Loading...</source>
        <translation>In carica...</translation>
    </message>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-view-host.cpp" line="+74"/>
        <source>All</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Text</source>
        <translation type="unfinished">Testo</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Images</source>
        <translation type="unfinished">Immagini</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Links</source>
        <translation type="unfinished">Link</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Files</source>
        <translation type="unfinished">File</translation>
    </message>
    <message>
        <location line="+34"/>
        <source>Browse clipboard history...</source>
        <translation>Naviga la cronologia...</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Clipboard monitoring unavailable</source>
        <translation>Monitoring della cronologia non disponibile</translation>
    </message>
    <message>
        <location line="+70"/>
        <source>Pause clipboard</source>
        <translation>Sospendi registrazione</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Resume clipboard</source>
        <translation>Riprendi registrazione</translation>
    </message>
    <message numerus="yes">
        <location line="+8"/>
        <source>%n Items</source>
        <translation>
            <numerusform>%n elemento</numerusform>
            <numerusform>%n elementi</numerusform>
        </translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Decryption failed</source>
        <translation>Impossibile decifrare</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Vicinae could not decrypt the data for this selection. It was most likely encrypted with a different key and cannot be recovered. You can remove this entry from the history.</source>
        <translation>Vicinae non ha potuto decifrare questo elemento. Probabilmente è stato cifrato con una chiave diversa da quella attuale e non può essere recuperato. Puoi eliminarlo.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Data unavailable</source>
        <translation>Dati non disponibili</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The data for this selection could not be found on disk.</source>
        <translation>I dati per questo elemento non sono stati trovati sul disco.</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Data is encrypted</source>
        <translation>I dati sono cifrati</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Data for this selection was previously encrypted but the clipboard is not currently configured to use encryption. You should be able to fix this by enabling it in the settings.</source>
        <translation>I dati per questo elemento sono stati cifrati precedentemente e la cifratura è al momento disattivata. Dovresti poterlo risolvere attivandola nelle impostazioni.</translation>
    </message>
</context>
<context>
    <name>ClipboardService</name>
    <message>
        <location filename="../src/services/clipboard/clipboard-service.cpp" line="+451"/>
        <source>Image (%1x%2)</source>
        <translation>Immagine (%1x%2)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Image</source>
        <translation>Immagine</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Unknown</source>
        <translation>Sconosciuto</translation>
    </message>
</context>
<context>
    <name>CloseWindowAction</name>
    <message>
        <location filename="../src/actions/window-actions.hpp" line="-37"/>
        <source>Close window</source>
        <translation>Chiudi finestra</translation>
    </message>
</context>
<context>
    <name>CommandLineSection</name>
    <message>
        <location filename="../src/builtins/system/system-run-model.hpp" line="+48"/>
        <source>Execute query</source>
        <translation>Esegui ricerca</translation>
    </message>
    <message>
        <location filename="../src/builtins/system/system-run-model.cpp" line="+38"/>
        <source>Open in %1 (hold)</source>
        <translation>Apri in %1 (mantieni)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open in %1</source>
        <translation>Apri in %1</translation>
    </message>
</context>
<context>
    <name>CommandListView</name>
    <message>
        <location filename="../src/ui/qml/views/CommandListView.qml" line="+13"/>
        <source>No results</source>
        <translation>Nessun risultato</translation>
    </message>
</context>
<context>
    <name>CommandRootItem</name>
    <message>
        <location filename="../src/root-search/extensions/extension-root-provider.cpp" line="+28"/>
        <location line="+49"/>
        <source>Command</source>
        <translation>Comando</translation>
    </message>
    <message>
        <location line="-44"/>
        <location line="+28"/>
        <source>Open command</source>
        <translation>Apri comando</translation>
    </message>
    <message>
        <location line="-13"/>
        <source>Copy extension path</source>
        <translation>Copia il percorso dell’estensione</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Internal Command</source>
        <translation>Comando interno</translation>
    </message>
</context>
<context>
    <name>CompletionPopup</name>
    <message>
        <location filename="../src/ui/qml/controls/CompletionPopup.qml" line="+15"/>
        <source>Filter...</source>
        <translation>Filtra...</translation>
    </message>
</context>
<context>
    <name>ConfigGlobalShortcuts</name>
    <message>
        <location filename="../src/services/global-shortcuts/config-global-shortcuts.cpp" line="+25"/>
        <source>Toggle Vicinae</source>
        <translation type="unfinished">Mostra/Nascondi Vicinae</translation>
    </message>
</context>
<context>
    <name>CopyCalculatorAnswerAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="+29"/>
        <source>Answer copied to clipboard</source>
        <translation>Risposta copiata negli appunti</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to copy answer</source>
        <translation>Impossibile copiare riposta</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy Result</source>
        <translation>Copia il risultato</translation>
    </message>
</context>
<context>
    <name>CopyCalculatorQuestionAndAnswerAction</name>
    <message>
        <location line="+18"/>
        <source>Answer copied to clipboard</source>
        <translation>Risposta copiata negli appunti</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to copy answer</source>
        <translation>Impossibile copiare la risposta</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy Question And Answer</source>
        <translation>Copia domanda e risposta</translation>
    </message>
</context>
<context>
    <name>CopyClipboardSelection</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="+29"/>
        <source>Selection copied to clipboard</source>
        <translation>Selezione copiata negli appunti</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to copy to clipboard</source>
        <translation>Impossibile copiare negli appunti</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy to clipboard</source>
        <translation>Copia negli appunti</translation>
    </message>
</context>
<context>
    <name>CopyItemDeeplink</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="+99"/>
        <source>Deeplink copied in clipboard</source>
        <translation>Deeplink copiato negli appunti</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy Deeplink</source>
        <translation>Copia il deeplink</translation>
    </message>
</context>
<context>
    <name>CopyShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="+269"/>
        <source>Copied to clipboard</source>
        <translation>Copiato negli appunti</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy shortcut</source>
        <translation>Copia scorciatoia</translation>
    </message>
</context>
<context>
    <name>CopyToClipboardAction</name>
    <message>
        <location filename="../src/actions/clipboard-actions.hpp" line="+21"/>
        <source>Copied to clipboard</source>
        <translation>Copiato negli appunti</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy to clipboard</source>
        <translation>Copia negli appunti</translation>
    </message>
</context>
<context>
    <name>CreateExtensionCommand</name>
    <message>
        <location filename="../src/builtins/developer/developer-extension.hpp" line="+10"/>
        <source>Create Extension</source>
        <translation>Crea un’estensione</translation>
    </message>
</context>
<context>
    <name>CreateExtensionFormView</name>
    <message>
        <location filename="../src/ui/qml/views/CreateExtensionFormView.qml" line="+16"/>
        <source>Author</source>
        <translation>Autore</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>If you plan on submitting your extension to the &lt;a href=&quot;vicinae://launch/core/store&quot;&gt;Vicinae store&lt;/a&gt;, this must exactly match your GitHub handle. Otherwise, you can set it to anything.</source>
        <translation>Se intendi pubblicare l’estensione sul &lt;a href=&quot;vicinae://launch/core/store&quot;&gt;negozio Vicinae&lt;/a&gt;, questo deve corrispondere esattamente al tuo nome utente GitHub. Altrimenti, puoi mettere quello che vuoi.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Username</source>
        <translation>Nome utente</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Extension Title</source>
        <translation>Titolo dell’estensione</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>My Extension</source>
        <translation>La Mia Estensione</translation>
    </message>
    <message>
        <location line="+8"/>
        <location line="+43"/>
        <source>Description</source>
        <translation>Descrizione</translation>
    </message>
    <message>
        <location line="-37"/>
        <source>An extension that does super cool things</source>
        <translation>Un’estensione fantastica che fa cose incredibili</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Location</source>
        <translation>Posizione</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Command Title</source>
        <translation>Titolo del comando</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>My Wonderful Command</source>
        <translation>Il Mio Super-Comando</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>My command does this, and that...</source>
        <translation>il mio comando fa questo, quello, ...</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Template</source>
        <translation>Modelli</translation>
    </message>
</context>
<context>
    <name>CreateExtensionSuccessViewHost</name>
    <message>
        <location filename="../src/builtins/developer/create-extension-success-view-host.cpp" line="+8"/>
        <source>
# Extension successfully created

Your new extension %1 has been succesfully created at `%2`.

For commands from this extension to be picked up by Vicinae, you need to run your extension in development mode at least once:

```bash
cd &apos;%2&apos;
npm install
npm run dev
```

You can learn more about extension development in the [Vicinae documentation](https://docs.vicinae.com/).
</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+37"/>
        <source>Open in %1</source>
        <translation>Apri in %1</translation>
    </message>
</context>
<context>
    <name>CreateExtensionViewHost</name>
    <message>
        <location filename="../src/builtins/developer/create-extension-view-host.cpp" line="+37"/>
        <source>Create extension</source>
        <translation>Crea un’estensione</translation>
    </message>
    <message>
        <location line="+19"/>
        <location line="+4"/>
        <location line="+19"/>
        <location line="+5"/>
        <source>Min. 3 chars</source>
        <translation>Min. 3 caratteri</translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Min. 16 chars</source>
        <translation>Min. 16 caratteri</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Must exist</source>
        <translation>Deve esistere</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Form has errors</source>
        <translation>Il formulario contiene degli errori</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Failed to create extension</source>
        <translation>Impossibile creare l’estensione</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Extension created!</source>
        <translation>Estensione creata!</translation>
    </message>
</context>
<context>
    <name>CreateShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-53"/>
        <source>Create shortcut</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>CreateShortcutCommand</name>
    <message>
        <location filename="../src/builtins/shortcut/shortcut-extension.hpp" line="+13"/>
        <source>Create Shortcut</source>
        <translation>Crea Scorciatoia</translation>
    </message>
</context>
<context>
    <name>CreateShortcutFromActiveBrowserTabCommand</name>
    <message>
        <location filename="../src/builtins/browser/browser-extension.cpp" line="+44"/>
        <source>Create Shortcut from Active Tab</source>
        <translation>Crea Scorciatoia dalla Scheda Attiva</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Create a vicinae shortcut from the currently active browser tab. May yield unexpected results if many browsers are connected at once.</source>
        <translation>Crea una scorciatoia Vicinae dalla scheda browser attiva. Potrebbe dare risultati inattesi se sono connesso più browser contemporaneamente.</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>No active tab!</source>
        <translation>Nessuna scheda attiva!</translation>
    </message>
</context>
<context>
    <name>CreateSnippetCommand</name>
    <message>
        <location filename="../src/builtins/snippet/create-snippet-command.hpp" line="+10"/>
        <source>Create Snippet</source>
        <translation>Crea Snippet</translation>
    </message>
</context>
<context>
    <name>DMenuSection</name>
    <message>
        <location filename="../src/ui/views/dmenu-model.cpp" line="+96"/>
        <source>Select entry</source>
        <translation>Scegli l’elemento</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Select entry (index)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Pass search text</source>
        <translation>Trasmetti testo di ricerca</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Select and copy entry</source>
        <translation>Seleziona e copia l’elemento</translation>
    </message>
</context>
<context>
    <name>DMenuView</name>
    <message>
        <location filename="../src/ui/qml/views/DMenuView.qml" line="+81"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Path</source>
        <translation>Percorso</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
</context>
<context>
    <name>DMenuViewHost</name>
    <message>
        <location filename="../src/ui/views/dmenu-view-host.cpp" line="+36"/>
        <source>Search entries...</source>
        <translation>Ricerca degli elementi...</translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Pass search text</source>
        <translation>Trasmetti testo di ricerca</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Pass and copy search text</source>
        <translation>Trasmetti e copia testo di ricerca</translation>
    </message>
</context>
<context>
    <name>DetailListView</name>
    <message>
        <location filename="../src/ui/qml/views/DetailListView.qml" line="+32"/>
        <source>No results</source>
        <translation>Nessun risultato</translation>
    </message>
</context>
<context>
    <name>DeveloperExtension</name>
    <message>
        <location filename="../src/builtins/developer/developer-extension.hpp" line="+12"/>
        <source>Developer</source>
        <translation>Sviluppatore</translation>
    </message>
</context>
<context>
    <name>DisableApplication</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="+8"/>
        <source>Disable item</source>
        <translation>Disattiva l’elemento</translation>
    </message>
</context>
<context>
    <name>DisableItemAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="+111"/>
        <source>Are you sure?</source>
        <translation>Sei sicuro/a?</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>You will need to go in the settings to manually re-enable it.</source>
        <translation>Dovrai andare nelle impostazioni per riattivarlo.</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Disable</source>
        <translation>Disattiva</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Item disabled</source>
        <translation>Elemento disattivato</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to disable</source>
        <translation>Impossibile disattivare</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Disable item</source>
        <translation>Disattiva elemento</translation>
    </message>
</context>
<context>
    <name>DismissNewsAction</name>
    <message>
        <location filename="../src/services/news/news-service.cpp" line="+34"/>
        <source>Dismiss</source>
        <translation>Ignora</translation>
    </message>
</context>
<context>
    <name>DuplicateShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-26"/>
        <source>Duplicate link</source>
        <translation>Duplica collegamento</translation>
    </message>
</context>
<context>
    <name>EditAppleShortcutAction</name>
    <message>
        <location filename="../src/root-search/apple-shortcuts/apple-shortcut-root-provider.cpp" line="-75"/>
        <source>Edit in Shortcuts</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Failed to open shortcut</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>EditClipboardKeywordsAction</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="+50"/>
        <source>Additional keywords that will be used to index this selection.</source>
        <translation>Parole aggiuntive per indicizzare questo elemento.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Edit keywords</source>
        <translation>Modifica parole chiave</translation>
    </message>
</context>
<context>
    <name>EditEmojiKeywordsAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="+35"/>
        <source>Additional keywords that will be used to index this glyph</source>
        <translation>Parole chiave per identificare questo simbolo</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Edit keyword</source>
        <translation>Modifica parole chiave</translation>
    </message>
</context>
<context>
    <name>EditKeywordsFormView</name>
    <message>
        <location filename="../src/ui/qml/views/EditKeywordsFormView.qml" line="+20"/>
        <source>Keywords</source>
        <translation>Parole chiave</translation>
    </message>
</context>
<context>
    <name>EditKeywordsViewHost</name>
    <message>
        <location filename="../src/ui/views/edit-keywords-view-host.cpp" line="+26"/>
        <source>Submit</source>
        <translation>Conferma</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Keywords edited</source>
        <translation>Parole chiave modificate</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Failed to edit keywords</source>
        <translation>Impossibile modificare parole chiave</translation>
    </message>
</context>
<context>
    <name>EditShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-41"/>
        <source>Edit shortcut</source>
        <translation>Modifica scorciatoia</translation>
    </message>
</context>
<context>
    <name>EmojiGridModel</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.hpp" line="+68"/>
        <source>Search for emojis and symbols...</source>
        <translation>Cerca emoji e simboli...</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="+262"/>
        <source>Pinned</source>
        <translation>Appesi</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Recently used</source>
        <translation>Usati di recente</translation>
    </message>
</context>
<context>
    <name>EmojiGridViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-view-host.hpp" line="+60"/>
        <source>All</source>
        <translation>Tutti</translation>
    </message>
</context>
<context>
    <name>EmptyView</name>
    <message>
        <location filename="../src/ui/qml/views/EmptyView.qml" line="+9"/>
        <source>No results</source>
        <translation>Nessun risultato</translation>
    </message>
</context>
<context>
    <name>EnabledFallbackSection</name>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-model.hpp" line="-19"/>
        <source>Enabled</source>
        <translation>Attivati</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-model.cpp" line="-22"/>
        <source>Disable fallback</source>
        <translation>Disattiva la ricerca fallback</translation>
    </message>
</context>
<context>
    <name>Expansion</name>
    <message>
        <location filename="../src/services/snippet/snippet-db.hpp" line="+31"/>
        <source>Keyword cannot be empty</source>
        <translation>La parola chiave non può essere vuota</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keyword exceeds maximum length of %1</source>
        <translation>La parola chiave supera la lunghezza massima di %1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Keyword must only contain printable ASCII characters (no spaces)</source>
        <translation>La parola chiave può solo contenere caratteri ASCII (senza spazi)</translation>
    </message>
</context>
<context>
    <name>ExtensionBoilerplateGenerator</name>
    <message>
        <location filename="../src/services/extension-boilerplate-generator/extension-boilerplate-generator.cpp" line="+32"/>
        <source>Simple List</source>
        <translation>Lista Semplice</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>List with Detail</source>
        <translation>Lista Dettagliata</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Controlled List</source>
        <translation>Lista Controllata</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Simple Detail</source>
        <translation>Dettaglio Semplice</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>No View</source>
        <translation>Senza Vista</translation>
    </message>
</context>
<context>
    <name>ExtensionErrorViewHost</name>
    <message>
        <location filename="../src/extension/views/extension-error-view-host.cpp" line="+7"/>
        <source># Extension crashed 💥!

This extension threw an uncaught exception and crashed as a result.

Find the full stacktrace below. You can also directly copy it from the action menu.

```
%1
```</source>
        <translation># L’estensione si è interrotta! 💥

Quest’estensione non ha potuto gestire un errore e si è interrotta.

Qui sotto trovi tutto lo stacktrace. Puoi anche copiarlo direttamente dal menu azioni.

```
%1
```</translation>
    </message>
</context>
<context>
    <name>ExtensionFormModel</name>
    <message>
        <location filename="../src/extension/views/extension-form-model.cpp" line="+229"/>
        <source>One or more fields have errors</source>
        <translation>Uno o più campi contengono errori</translation>
    </message>
</context>
<context>
    <name>ExtensionGridModel</name>
    <message>
        <location filename="../src/extension/views/extension-grid-model.cpp" line="+233"/>
        <source>Search...</source>
        <translation>Cerca...</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No results</source>
        <translation>Nessun risultato</translation>
    </message>
</context>
<context>
    <name>ExtensionGridView</name>
    <message>
        <location filename="../src/ui/qml/views/ExtensionGridView.qml" line="+11"/>
        <source>No results</source>
        <translation>Nessun risultato</translation>
    </message>
</context>
<context>
    <name>ExtensionListModel</name>
    <message>
        <location filename="../src/extension/views/extension-list-model.cpp" line="+197"/>
        <source>Search...</source>
        <translation>Cerca...</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No results</source>
        <translation>Nessun risultato</translation>
    </message>
</context>
<context>
    <name>ExtensionSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/ExtensionSettingsPage.qml" line="+115"/>
        <source>Description</source>
        <translation>Descrizione</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Preferences</source>
        <translation>Preferenze</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Commands</source>
        <translation>Comandi</translation>
    </message>
    <message>
        <location line="+118"/>
        <source>Shortcut</source>
        <translation>Scorciatoia</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Add Alias</source>
        <translation>Aggiungi Alias</translation>
    </message>
    <message>
        <location line="+96"/>
        <source>Nothing to configure</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Commands and preferences will show up here once available.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ExtensionView</name>
    <message>
        <location filename="../src/ui/qml/views/ExtensionView.qml" line="+114"/>
        <source>No results</source>
        <translation>Nesssun risultato</translation>
    </message>
</context>
<context>
    <name>FileExtension</name>
    <message>
        <location filename="../src/builtins/file/file-extension.hpp" line="+105"/>
        <source>System files</source>
        <translation>File di sistema</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Integrate with system files</source>
        <translation>Integrazione coi file di sistema</translation>
    </message>
</context>
<context>
    <name>FilePreview</name>
    <message>
        <location filename="../src/ui/qml/detail/FilePreview.qml" line="+37"/>
        <source>Preview not available for this file type</source>
        <translation>Anteprima non disponibile per file di questo tipo</translation>
    </message>
</context>
<context>
    <name>FocusWindowAction</name>
    <message>
        <location filename="../src/actions/window-actions.hpp" line="-17"/>
        <source>Focus window</source>
        <translation>Attiva la finestra</translation>
    </message>
</context>
<context>
    <name>FontBrowserViewHost</name>
    <message>
        <location filename="../src/builtins/font/font-browser-view-host.hpp" line="+55"/>
        <source>All</source>
        <translation>Tutti</translation>
    </message>
</context>
<context>
    <name>FontExtension</name>
    <message>
        <location filename="../src/builtins/font/font-extension.hpp" line="+9"/>
        <source>Font</source>
        <translation>Font</translation>
    </message>
</context>
<context>
    <name>FontGridModel</name>
    <message>
        <location filename="../src/builtins/font/font-grid-model.hpp" line="+53"/>
        <source>Search fonts...</source>
        <translation>Cerca font...</translation>
    </message>
    <message>
        <location filename="../src/builtins/font/font-grid-model.cpp" line="+152"/>
        <source>All Fonts (%1)</source>
        <translation>Tutti i Font (%1)</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Results (%1)</source>
        <translation>Risultati (%1)</translation>
    </message>
</context>
<context>
    <name>Footer</name>
    <message>
        <location filename="../src/ui/qml/launcher/Footer.qml" line="+62"/>
        <source>Actions</source>
        <translation>Azioni</translation>
    </message>
</context>
<context>
    <name>ForceQuitAppAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+96"/>
        <source>Force Quit Application</source>
        <translation>Forza Chiusura Applicazione</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to force quit %1</source>
        <translation>Impossibile forzare la chiusura di %1</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Force quit %1</source>
        <translation>Forza la chiusura di %1</translation>
    </message>
</context>
<context>
    <name>ForgetTelemetryCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+175"/>
        <source>Forget Past Vicinae Telemetry</source>
        <translation>Dimentica Telemetria Passata di Vicinae</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Asks the vicinae server to anonymize telemetry data that was sent with your vicinae instance ID attached. The ID is only linked to your vicinae install, which has no direct relationship with your system.</source>
        <translation>Chiede al server Vicinae di anonimizzare i dati di telemetria inviati con il tuo ID istanza. L’ID è collegato solo alla tua installazione di Vicinae, non è direttamente collegato al tuo sistema.</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Processing...</source>
        <translation>In corso...</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Past telemetry was successfully detached from your vicinae user ID.</source>
        <translation>éa telemetria è stata correttamente scollegata dal tuo user ID Vicinae.</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to forget past telemetry data</source>
        <translation>Impossibile dimenticare la telemetria passata</translation>
    </message>
</context>
<context>
    <name>FormAppSelector</name>
    <message>
        <location filename="../src/ui/qml/form/FormAppSelector.qml" line="+50"/>
        <source>All applications</source>
        <translation>Tutte le applicazioni</translation>
    </message>
    <message>
        <location line="+63"/>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-98"/>
        <source>+ Restrict to app…</source>
        <translation>+ Restringi all’app…</translation>
    </message>
</context>
<context>
    <name>FormFilePicker</name>
    <message>
        <location filename="../src/ui/qml/form/FormFilePicker.qml" line="+91"/>
        <source>Select files</source>
        <translation>Scegli file</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Select a file</source>
        <translation>Scegli un file</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Select a directory</source>
        <translation>Scegli cartella</translation>
    </message>
    <message>
        <location line="-73"/>
        <location line="+119"/>
        <source>No directory selected</source>
        <translation>Nessuna cartella scleta</translation>
    </message>
    <message>
        <location line="-119"/>
        <location line="+119"/>
        <source>No file selected</source>
        <translation>Nessun file scelto</translation>
    </message>
    <message>
        <location line="+13"/>
        <location line="+124"/>
        <source>Remove</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+31"/>
        <source>+ Add folder…</source>
        <translation>+ Aggiungi cartella…</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>+ Add file…</source>
        <translation>+ Aggiungi file…</translation>
    </message>
</context>
<context>
    <name>FormPasswordInput</name>
    <message>
        <location filename="../src/ui/qml/form/FormPasswordInput.qml" line="+98"/>
        <source>Hide password</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Show password</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>GeneralSettingsModel</name>
    <message>
        <location filename="../src/ui/settings/general-settings-model.cpp" line="+202"/>
        <location line="+12"/>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-10"/>
        <location line="+15"/>
        <source>None</source>
        <translation>Nessuno</translation>
    </message>
    <message>
        <location line="-14"/>
        <location line="+14"/>
        <source>Blurred</source>
        <translation>Sfocato</translation>
    </message>
    <message>
        <location line="-12"/>
        <location line="+12"/>
        <source>Liquid Glass</source>
        <translation>Liquid Glass</translation>
    </message>
    <message>
        <location line="-11"/>
        <source>Window material</source>
        <translation>Materiale della finestra</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Themes</source>
        <translation>Temi</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Fonts</source>
        <translation>Font</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Icon Themes</source>
        <translation>Temi Icone</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Favicon Services</source>
        <translation>Servizi Favicon</translation>
    </message>
    <message>
        <location line="+13"/>
        <location line="+10"/>
        <source>Default</source>
        <translation>Default</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Keybinding Schemes</source>
        <translation>Schemi di Scorciatoie</translation>
    </message>
    <message>
        <location line="+48"/>
        <location line="+10"/>
        <source>System default</source>
        <translation>Defult di sistema</translation>
    </message>
    <message>
        <location line="-6"/>
        <source>Languages</source>
        <translation>Lingue</translation>
    </message>
</context>
<context>
    <name>GeneralSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/GeneralSettingsPage.qml" line="+35"/>
        <source>Behavior</source>
        <translation>Comportamento</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Launcher hotkey</source>
        <translation>Scorciatoia launcher</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Global shortcut to toggle the Vicinae launcher.</source>
        <translation>Scorciatoia globale per aprire il launcher Vicinae.</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Close on focus loss</source>
        <translation>Chiude su perdita focus</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Close on Escape</source>
        <translation>Chiudi su Escpape</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pressing Escape closes the launcher instead of navigating one view back.</source>
        <translation>Premere il tasto esci chiude il launcher invece che tornare alla schermata precedente.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Pop to root on close</source>
        <translation>Torna alla schermata dopo la chiusura</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reset the navigation state when the launcher window is closed.</source>
        <translation>Resetta lo stato di navigazione quando la finestra del launcher viene chiusa.</translation>
    </message>
    <message>
        <location line="+10"/>
        <location line="+7"/>
        <source>Language</source>
        <translation>Lingua</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Requires restarting Vicinae to take effect.</source>
        <translation>Necessita un riavvio di Vicinae per prendere effetto.</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Privacy</source>
        <translation>Privacy</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Basic usage statistics</source>
        <translation>Statistiche d’utilizzo di base</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Send basic system and vicinae installation information on startup to help improve Vicinae.</source>
        <translation>Invia informazioni basilari sul sistema e sull’installazione di vicinae all’avvio per aiutare lo sviluppo.</translation>
    </message>
</context>
<context>
    <name>GenericGridView</name>
    <message>
        <location filename="../src/ui/qml/views/GenericGridView.qml" line="+29"/>
        <source>No results</source>
        <translation>Nessun risultato</translation>
    </message>
</context>
<context>
    <name>GenericListView</name>
    <message>
        <location filename="../src/ui/qml/views/GenericListView.qml" line="+26"/>
        <source>No results</source>
        <translation>Nessun risultato</translation>
    </message>
</context>
<context>
    <name>Gnome::Workspace</name>
    <message>
        <location filename="../src/services/window-manager/gnome/gnome-workspace.cpp" line="+18"/>
        <source>Workspace %1</source>
        <translation>Spazio di lavoro %1</translation>
    </message>
</context>
<context>
    <name>HibernateCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="+124"/>
        <source>Hibernate System</source>
        <translation>Iberna Sistema</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Suspend the system to disk. This turns off the system completely and saves its state on disk, to be restored on next boot.</source>
        <translation>Sospendi il sistema al disco rigido. Spegne il sistema completamente ma ne salva lo stato, che sarà ripristinato al prossimo avvio.</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>System can&apos;t hibernate</source>
        <translation>Il sistema non può andare in ibernazione</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to hibernate</source>
        <translation>Impossibile ibernare il sistema</translation>
    </message>
</context>
<context>
    <name>IconBrowserCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+26"/>
        <source>Search Builtin Icons</source>
        <translation>Cerca Icone di Vicinae</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search Vicinae builtin set of icons</source>
        <translation>Cerca le icone del set predefinito di Vicinae</translation>
    </message>
</context>
<context>
    <name>ImageViewer</name>
    <message>
        <location filename="../src/ui/qml/detail/ImageViewer.qml" line="+161"/>
        <source>%1 / %2</source>
        <translation>%1 / %2</translation>
    </message>
</context>
<context>
    <name>InspectLocalStorage</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+13"/>
        <source>Inspect Local Storage</source>
        <translation>Ispeziona Storage Locale</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Browse data stored in Vicinae&apos;s local storage. This includes data stored for builtin extensions as well as third-party extensions making use of the LocalStorage API.</source>
        <translation>Naviga i dati memorizzati localmente da Vicinae. Questo include sia i dati delle estensioni predefinite che di estensioni terze che usano l’API LocalStorage.</translation>
    </message>
</context>
<context>
    <name>InstallExtensionAction</name>
    <message>
        <location filename="../src/actions/extension-actions.cpp" line="+15"/>
        <source>Downloading extension...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Failed to download extension</source>
        <translation type="unfinished">Impossibile scaricare l’estensione</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Failed to extract extension archive</source>
        <translation type="unfinished">Impossibile estrarre l’archivio dell’estensione</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Extension installed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/actions/extension-actions.hpp" line="+28"/>
        <source>Install extension</source>
        <translation type="unfinished">Installa estensione</translation>
    </message>
</context>
<context>
    <name>InstallUpdateAction</name>
    <message>
        <location filename="../src/services/update/update-service.cpp" line="+190"/>
        <source>Install Update</source>
        <translation>Installa Aggiornamento</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>An update is already in progress</source>
        <translation>Un aggiornamento è già in corso</translation>
    </message>
</context>
<context>
    <name>InstalledExtensionsSection</name>
    <message>
        <location filename="../src/builtins/vicinae/installed-extensions-model.hpp" line="+18"/>
        <source>Installed Extensions ({count})</source>
        <translation>Estensioni Installate ({count})</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/installed-extensions-model.cpp" line="+38"/>
        <source>Local</source>
        <translation>Locale</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Copy</source>
        <translation>Copia</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy Name</source>
        <translation>Copia Nome</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy ID</source>
        <translation>Copia ID</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy Path</source>
        <translation>Copiea Percorso</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy Author</source>
        <translation>Copia Autore</translation>
    </message>
</context>
<context>
    <name>InstalledExtensionsViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/installed-extensions-view-host.cpp" line="+12"/>
        <source>Search extensions...</source>
        <translation>Cerca estensioni...</translation>
    </message>
</context>
<context>
    <name>InternalExtension</name>
    <message>
        <location filename="../src/builtins/internal/internal-extension.hpp" line="+12"/>
        <location line="+1"/>
        <source>Internal Commands</source>
        <translation>Comandi Interni</translation>
    </message>
</context>
<context>
    <name>KdeSettingsRootItem</name>
    <message>
        <location filename="../src/root-search/kde-settings/kde-settings-root-provider.cpp" line="+13"/>
        <location line="+9"/>
        <source>KDE Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Name</source>
        <translation type="unfinished">Nome</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Where</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Open in System Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy Module ID</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>KdeSettingsRootProvider</name>
    <message>
        <location line="+17"/>
        <source>KDE Settings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Modules of the KDE System Settings application.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>KeyboardBridge</name>
    <message>
        <location filename="../src/ui/bridges/keyboard-bridge.hpp" line="+60"/>
        <source>Modifier required</source>
        <translation>Modificatore richiesto</translation>
    </message>
</context>
<context>
    <name>LauncherWindow</name>
    <message>
        <location filename="../src/ui/qml/launcher/LauncherWindow.qml" line="+46"/>
        <source>Vicinae Launcher</source>
        <translation>Launcher Vicinae</translation>
    </message>
    <message>
        <location filename="../src/ui/windows/launcher-window.cpp" line="+872"/>
        <source>Open Settings</source>
        <translation>Apri Impostazioni</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Keyboard Shortcuts</source>
        <translation>Scorciatoie Tastiera</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Extension Store</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Documentation</source>
        <translation>Documentazione</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+5"/>
        <source>Opened in browser</source>
        <translation>Apri nel Browser</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Report a Bug</source>
        <translation>Segnala un Bug</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>About Vicinae</source>
        <translation>Riguardo Vicinae</translation>
    </message>
</context>
<context>
    <name>LocalStorageItemSection</name>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-model.hpp" line="+19"/>
        <source>Items ({count})</source>
        <translation>Elementi ({count})</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-model.cpp" line="+31"/>
        <source>Show value</source>
        <translation>Mostra valore</translation>
    </message>
</context>
<context>
    <name>LocalStorageItemViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-view-host.cpp" line="+23"/>
        <source>Search items...</source>
        <translation>Cerca elementi...</translation>
    </message>
</context>
<context>
    <name>LocalStorageNamespaceSection</name>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-model.hpp" line="-11"/>
        <source>Namespaces ({count})</source>
        <translation>Namespace ({count})</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-model.cpp" line="-16"/>
        <source>Browse namespace</source>
        <translation>Cerca namespace</translation>
    </message>
</context>
<context>
    <name>LocalStorageViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/local-storage-view-host.cpp" line="-15"/>
        <source>Search namespaces...</source>
        <translation>Carca namespace...</translation>
    </message>
</context>
<context>
    <name>LockCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="-48"/>
        <source>Lock Session</source>
        <translation>Blocca Sessione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lock the current user session</source>
        <translation>La sessione attuale viene bloccata</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>System can&apos;t lock</source>
        <translation>La sessione non può essere bloccata</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to lock</source>
        <translation>Impossibile bloccare</translation>
    </message>
</context>
<context>
    <name>LogOutCommand</name>
    <message>
        <location line="+176"/>
        <source>Log Out</source>
        <translation>Termina Sessione</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Terminate the current user session. If you simply want to lock your session you should use &apos;Lock Session&apos; instead.</source>
        <translation>Termina la sessione utente attuale. Se vuoi solo bloccare la sesssione, usa ’Blocca Sessione’.</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>System can&apos;t logout</source>
        <translation>La sessione non può essere terminata</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to log out</source>
        <translation>Impossibile terminare la sessione</translation>
    </message>
</context>
<context>
    <name>MacOSGlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/macos-global-shortcut-backend.cpp" line="+166"/>
        <location line="+44"/>
        <source>unsupported or invalid trigger</source>
        <translation>Trigger non valido o non supportato</translation>
    </message>
    <message>
        <location line="-36"/>
        <source>failed to register hot key (%1)</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MacSettingsRootItem</name>
    <message>
        <location filename="../src/root-search/macos-settings/macos-settings-root-provider.mm" line="+140"/>
        <location line="+9"/>
        <source>System Settings</source>
        <translation>Impostazioni Sistema</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Bundle ID</source>
        <translation>ID Bundle</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Legacy ID</source>
        <translation>ID Legacy</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Where</source>
        <translation>Dove</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Open %1 Settings</source>
        <translation>Apri Impostazioni %1</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy URL</source>
        <translation>Copia URL</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Copy Bundle ID</source>
        <translation>Copia ID Bundle</translation>
    </message>
</context>
<context>
    <name>MacSettingsRootProvider</name>
    <message>
        <location line="+14"/>
        <source>System Settings</source>
        <translation>Impostazioni Sistema</translation>
    </message>
</context>
<context>
    <name>MacosScreenshotProvider</name>
    <message>
        <location filename="../src/services/screenshots/macos/macos-screenshot-provider.mm" line="+99"/>
        <source>Spotlight is unavailable. Showing screenshots and recordings from the screenshot folder.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MacosUpdateInstaller</name>
    <message>
        <location filename="../src/services/update/macos-update-installer.mm" line="+207"/>
        <source>This installation cannot update itself</source>
        <translation>Questa installazione non può aggiornarsi da sola.</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Mounting update image…</source>
        <translation>Montaggio dell’immagine d’aggiornamento…</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Failed to mount the update image</source>
        <translation>Impossibile montare l’immagine d’aggiornamento</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Could not find the update image mount point</source>
        <translation>Impossibile trovare il punto di montaggio dell’immagine d’aggiornamento</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Verifying update…</source>
        <translation>Verifica aggiornamento…</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Installing update…</source>
        <translation>Installazione aggiornamento…</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to stage update: %1</source>
        <translation>Impossibile preparere aggiornamento: %1</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Failed to move the current app aside: %1</source>
        <translation>Impossibile mettere da parte l’app attuale: %1</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to install the new app: %1</source>
        <translation>Impossibile installare la nuova app: %1</translation>
    </message>
</context>
<context>
    <name>ManageFallbackActions</name>
    <message>
        <location filename="../src/actions/fallback-actions.hpp" line="+15"/>
        <source>Manage Fallback Actions</source>
        <translation>Gestisci Azioni Fallback</translation>
    </message>
</context>
<context>
    <name>ManageFallbackCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/configure-fallback-command.hpp" line="+11"/>
        <source>Configure Fallback Commands</source>
        <translation>Configura Comandi Fallback</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Configure what commands are to be presented as fallback options when nothing matches the search in the root search.</source>
        <translation>Cnfigura quali comandi vengono presentati come fallback se non ci sono risultati per la ricerca nella schermata principale.</translation>
    </message>
</context>
<context>
    <name>ManageFallbackViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/manage-fallback-view-host.cpp" line="+12"/>
        <source>Search commands...</source>
        <translation>Cerca comandi...</translation>
    </message>
</context>
<context>
    <name>ManageShortcutsCommand</name>
    <message>
        <location filename="../src/builtins/shortcut/shortcut-extension.hpp" line="+13"/>
        <source>Manage Shortcuts</source>
        <translation>Gestisci Scorciatoie</translation>
    </message>
</context>
<context>
    <name>ManageShortcutsSection</name>
    <message>
        <location filename="../src/builtins/shortcut/manage-shortcuts-model.hpp" line="+17"/>
        <source>Shortcuts ({count})</source>
        <translation>Scorciatoie ({count})</translation>
    </message>
</context>
<context>
    <name>ManageShortcutsViewHost</name>
    <message>
        <location filename="../src/builtins/shortcut/manage-shortcuts-view-host.cpp" line="+26"/>
        <source>Search shortcuts...</source>
        <translation>Cerca scorciatoie...</translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Application</source>
        <translation>Applicazione</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>%1 (Default)</source>
        <translation type="unfinished">%1 (di default)</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Opened</source>
        <translation>Aperta</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Last Opened</source>
        <translation>Ultima Apertura</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Never</source>
        <translation>mai</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Created at</source>
        <translation>Creata il</translation>
    </message>
</context>
<context>
    <name>ManageSnippetsCommand</name>
    <message>
        <location filename="../src/builtins/snippet/manage-snippets-command.hpp" line="+10"/>
        <source>Manage Snippets</source>
        <translation>Gestisci Snippet</translation>
    </message>
</context>
<context>
    <name>ManageSnippetsSection</name>
    <message>
        <location filename="../src/builtins/snippet/manage-snippets-model.hpp" line="+18"/>
        <source>Snippets ({count})</source>
        <translation>Snippet ({count})</translation>
    </message>
    <message>
        <location filename="../src/builtins/snippet/manage-snippets-model.cpp" line="+33"/>
        <source>Copy to clipboard</source>
        <translation>Copia negli appunti</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copied to clipboard</source>
        <translation>Copiato negli appunti</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to copy to clipboard</source>
        <translation>Impossibile copiare negli appunti</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Edit snippet</source>
        <translation>Modifica snippet</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Duplicate snippet</source>
        <translation>Duplica snippet</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Remove snippet</source>
        <translation>Elimina snippet</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove snippet</source>
        <translation>Impossibile eliminare snippet</translation>
    </message>
</context>
<context>
    <name>ManageSnippetsViewHost</name>
    <message>
        <location filename="../src/builtins/snippet/manage-snippets-view-host.cpp" line="+12"/>
        <source>No snippets</source>
        <translation>Nessuno snippet</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Create a snippet to get started</source>
        <translation>Crea uno snippet per cominciare</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Search for snippets...</source>
        <translation>Cerca snippet...</translation>
    </message>
    <message>
        <location line="+25"/>
        <source>Text</source>
        <translation>Testo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>File</source>
        <translation>File</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Created at</source>
        <translation>Creato il</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Updated at</source>
        <translation>Aggiornato il</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Keyword</source>
        <translation>Parola chiave</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Apps</source>
        <translation>Applicazioni</translation>
    </message>
    <message>
        <location line="+69"/>
        <source>Create snippet</source>
        <translation>Crea snippet</translation>
    </message>
</context>
<context>
    <name>MarkItemAsFavorite</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="-80"/>
        <source>Mark as favorite</source>
        <translation>Marca come preferito</translation>
    </message>
</context>
<context>
    <name>MarkdownShowcase</name>
    <message>
        <location filename="../src/builtins/internal/markdown-showcase-command.hpp" line="+171"/>
        <source>Markdown Showcase</source>
        <translation>Anteprima Markdown</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Preview all supported markdown features</source>
        <translation>Mostra tutte le funzioni markdown supportate</translation>
    </message>
</context>
<context>
    <name>MarkdownShowcaseView</name>
    <message>
        <location line="-160"/>
        <source>Close</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MarkdownView</name>
    <message>
        <location filename="../src/ui/qml/markdown/MarkdownView.qml" line="+272"/>
        <source>Copy</source>
        <translation>Copia</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Select All</source>
        <translation>Seleziona tutto</translation>
    </message>
</context>
<context>
    <name>MdCallout</name>
    <message>
        <location filename="../src/ui/qml/markdown/MdCallout.qml" line="+36"/>
        <source>Caution</source>
        <translation>Attenzione</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Warning</source>
        <translation>Attenzione</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Important</source>
        <translation>Importante</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Tip</source>
        <translation>Consiglio</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Note</source>
        <translation>Nota</translation>
    </message>
</context>
<context>
    <name>MdCodeBlock</name>
    <message>
        <location filename="../src/ui/qml/markdown/MdCodeBlock.qml" line="+59"/>
        <source>Copied!</source>
        <translation>Copiato!</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Copy</source>
        <translation>Copia</translation>
    </message>
</context>
<context>
    <name>MediaExtension</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="+330"/>
        <source>Media</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Control media playback and system audio</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MenuBarMenuSection</name>
    <message>
        <location filename="../src/builtins/vicinae/menu-bar-search-view-host.hpp" line="+38"/>
        <source>Results ({count} items)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+28"/>
        <source>Run Menu Item</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Open in Menu Bar</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MenuBarSearchViewHost</name>
    <message>
        <location line="+22"/>
        <source>Filter by menu item title...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MissingPreferenceView</name>
    <message>
        <location filename="../src/ui/qml/views/MissingPreferenceView.qml" line="+30"/>
        <source>Welcome to %1</source>
        <translation>Benvenuto in %1</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Before you can use this command, you need to fill in the required preference fields below.</source>
        <translation>Prima che tu possa usare questo comando, devi compilare il campo sulle preferenze in basso.</translation>
    </message>
    <message>
        <location line="+130"/>
        <source>Select an app…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Add app…</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MissingPreferenceViewHost</name>
    <message>
        <location filename="../src/extension/views/missing-preference-view-host.cpp" line="+215"/>
        <source>Save preferences</source>
        <translation>Salva preferenze</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Please fill in all required fields</source>
        <translation>Per favore riempi ogni campo obbligatorio</translation>
    </message>
</context>
<context>
    <name>MoveFavoriteDownAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="+53"/>
        <source>Move down in favorites</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MoveFavoriteUpAction</name>
    <message>
        <location line="-9"/>
        <source>Move up in favorites</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NavigationController</name>
    <message>
        <location filename="../src/navigation-controller.cpp" line="+669"/>
        <source>Extension manager is not running</source>
        <translation>Il gestore delle estensioni non è in esecuzione</translation>
    </message>
</context>
<context>
    <name>NewsService</name>
    <message>
        <location filename="../src/services/news/news-service.cpp" line="+68"/>
        <source>Telemetry</source>
        <translation>Telemetria</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>We now collect basic usage statistics on startup</source>
        <translation>Ora raccogliamo dati d’uso basilari all’avvio</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Learn more</source>
        <translation>Di più a riguardo</translation>
    </message>
</context>
<context>
    <name>NextTrackCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="-219"/>
        <location line="+26"/>
        <source>Next Track</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-25"/>
        <source>Skip to the next track</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>player</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>%1 cannot skip to the next track</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to skip to the next track</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NowPlayingCommand</name>
    <message>
        <location line="+46"/>
        <source>Now Playing</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Browse and control running media players</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NowPlayingViewHost</name>
    <message>
        <location filename="../src/builtins/media/now-playing-view-host.hpp" line="+27"/>
        <source>Search players...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Players</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Playing</source>
        <translation type="unfinished">In riproduzione</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Paused</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Pause</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Play</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Next Track</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Previous Track</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>NullUpdateInstaller</name>
    <message>
        <location filename="../src/services/update/null-update-installer.hpp" line="+14"/>
        <source>Self update is not supported on this platform</source>
        <translation>L’aggiornamento automatico non è supportato dalla piattaforma</translation>
    </message>
</context>
<context>
    <name>OAuthOverlayView</name>
    <message>
        <location filename="../src/ui/qml/views/OAuthOverlayView.qml" line="+29"/>
        <source>Back</source>
        <translation type="unfinished">Indietro</translation>
    </message>
    <message>
        <location line="+65"/>
        <source>Continue with %1</source>
        <translation>Continua con %1</translation>
    </message>
    <message>
        <location line="+33"/>
        <source>You&apos;re in!</source>
        <translation>Sei dentro!</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Successfully connected to %1.
Back to command in an instant...</source>
        <translation>Connessione a %1 riuscita.
Torniamo al comando tra un attimo...</translation>
    </message>
</context>
<context>
    <name>OAuthTokenStoreCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="-33"/>
        <source>Manage OAuth Token Sets</source>
        <translation>Gestisci Token OAuth</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Manage OAuth token sets that have been saved by extensions providing OAuth integrations.</source>
        <translation>Gestisci gli insiemi di token OAuth salvati dale estensioni con integrazioni OAuth.</translation>
    </message>
</context>
<context>
    <name>OAuthTokenStoreSection</name>
    <message>
        <location filename="../src/builtins/vicinae/oauth-token-store-model.hpp" line="+17"/>
        <source>OAuth Token Sets ({count})</source>
        <translation>Insiemi di Token OAuth ({count})</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/oauth-token-store-model.cpp" line="+21"/>
        <source>Expired</source>
        <translation>Scaduto</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Remove token set</source>
        <translation>Rimuovi insieme di token</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Are you sure?</source>
        <translation>Sei sicuro/a?</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>You will need to go through the OAuth login flow again the next time you want to use this service</source>
        <translation>Dovrai rieffettuare l’accesso OAuth la prossima volta che vuoi usare questo servizio</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to remove token set</source>
        <translation>Impossibile rimuovere l’insieme di token</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Token set removed</source>
        <translation>Insieme di token rimosso</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy</source>
        <translation>Copia</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Copy Access Token</source>
        <translation>Copia Token d’Accesso</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy Refresh Token</source>
        <translation>Copia Token d’Aggiornamento</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy ID Token</source>
        <translation>Copia Token ID</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Copy Scopes</source>
        <translation>Copia Ambiente</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy Expiration Date</source>
        <translation>Copia Data di Scadenza</translation>
    </message>
</context>
<context>
    <name>OAuthTokenStoreViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/oauth-token-store-view-host.cpp" line="+12"/>
        <source>Search token sets...</source>
        <translation>Cerca insieme di token...</translation>
    </message>
</context>
<context>
    <name>OnboardingWindow</name>
    <message>
        <location filename="../src/ui/qml/onboarding/OnboardingWindow.qml" line="+41"/>
        <source>Grant Access</source>
        <translation>Concedi Accesso</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Granted</source>
        <translation>Concesso</translation>
    </message>
    <message>
        <location line="+16"/>
        <location line="+40"/>
        <source>Welcome to Vicinae</source>
        <translation>Benvenuto in Vicinae</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Let&apos;s set it up. It only takes a minute.</source>
        <translation>Configuriamo! Ci vuole giusto un minuto.</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Permissions</source>
        <translation>Permessi</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Vicinae needs additional permissions in order to make the best of your Mac.</source>
        <translation>Vicinae richiede permessi aggiuntivi per poter usare al meglio il tuo Mac.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Accessibility</source>
        <translation>Accessibilità</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Used to paste, expand snippets, and move windows.</source>
        <translation>Usato per incollare, espandere snippet e spostare finestre.</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Full Disk Access</source>
        <translation>Accesso Disco Completo</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Notifications</source>
        <translation>Notifiche</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Allows file search to cover your entire disk.</source>
        <translation>Permette la ricerca di file in tutto il disco.</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Allows extensions to send desktop notifications.</source>
        <translation>Permette alle estensioni di inviare notifiche.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Full disk access needs to be explicitly enabled if you want file search to cover all your files.</source>
        <translation>L’accesso disco completo deve essere esplicitamente abilitato se vuoi che la ricerca file possa funzionare come deve.</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Without accessibility access, paste, snippet expansion, and window management are unavailable.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Make it your own</source>
        <translation>Personalizzalo</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>You will be able to change these settings later.</source>
        <translation>Potrai cambiare queste impostazioni più tardi.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Theme</source>
        <translation>Tema</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Shared across the entire app.</source>
        <translation>Unico in tutta l’applicazione.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Global hotkey</source>
        <translation>Scorciatoia globale</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Opens the launcher from anywhere.</source>
        <translation>Apre il launcher da ovunque tu voglia.</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Bind a key to &quot;vicinae toggle&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Open Docs</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Launch at login</source>
        <translation>Lancer à l’ouverture de session</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Starts Vicinae in the background at login.</source>
        <translation>Avvia Vicinae in background all’accesso.</translation>
    </message>
    <message>
        <location line="+19"/>
        <source>Setup complete</source>
        <translation>Configurazione completata</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Vicinae is running. Open the launcher with:</source>
        <translation>Vicinae è in esercuzione. Apri il launcher con:</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Vicinae is running. Bind a key to &quot;vicinae toggle&quot; to open it from anywhere.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Vicinae is open source software.</source>
        <translation>Vicinae è un software open source.</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Sponsor</source>
        <translation>Sponsor</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Back</source>
        <translation>Indietro</translation>
    </message>
    <message>
        <location line="+39"/>
        <source>Finish</source>
        <translation>Termina</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Continue</source>
        <translation>Continua</translation>
    </message>
</context>
<context>
    <name>OpenAppAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="-56"/>
        <source>Failed to start app</source>
        <translation>Impossibile avviare l’applicazione</translation>
    </message>
</context>
<context>
    <name>OpenAppLocationAction</name>
    <message>
        <location line="-36"/>
        <source>Open Location</source>
        <translation>Apri Posizione</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to open app location</source>
        <translation>Impossibile aprire la posizione dell’app</translation>
    </message>
</context>
<context>
    <name>OpenBuiltinCommandAction</name>
    <message>
        <location filename="../src/actions/command-actions.hpp" line="+17"/>
        <source>Open command</source>
        <translation>Apri comando</translation>
    </message>
</context>
<context>
    <name>OpenCalculatorHistoryAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="+9"/>
        <source>Open Calculator History</source>
        <translation>Apri Cronologia Calcolatrice</translation>
    </message>
</context>
<context>
    <name>OpenCompletedShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-32"/>
        <source>Open shortcut</source>
        <translation>Apri scorciatoia</translation>
    </message>
</context>
<context>
    <name>OpenCompletedShortcutWithAction</name>
    <message>
        <location line="+114"/>
        <source>Open with...</source>
        <translation>Apri Con...</translation>
    </message>
</context>
<context>
    <name>OpenControlPanelItemAction</name>
    <message>
        <location filename="../src/root-search/control-panel/control-panel-root-provider.cpp" line="+45"/>
        <source>Failed to open settings</source>
        <translation>Impossibible aprire le impostazioni</translation>
    </message>
</context>
<context>
    <name>OpenControlPanelTaskAction</name>
    <message>
        <location line="+26"/>
        <source>Failed to open settings</source>
        <translation>Impossibile aprire le impostazioni</translation>
    </message>
</context>
<context>
    <name>OpenDefaultVicinaeConfig</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="-117"/>
        <source>Open Default Config File</source>
        <translation>Apri File di Configurazione Predefinito</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open the default vicinae configuration file</source>
        <translation>Apri il file di configurazione di default di Vicinae</translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Failed to open temporary file</source>
        <translation>Impossibile aprire il file temporaneo</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to open default config file</source>
        <translation>Impossibile aprire il file di configurazione predefinito</translation>
    </message>
</context>
<context>
    <name>OpenDiscordCommand</name>
    <message>
        <location line="-85"/>
        <source>Join the Discord Server</source>
        <translation>Entra nel Server Discord</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Open link to join the official Vicinae discord server.</source>
        <translation>Apri il link per entrare nel server discord ufficiale di Vicinae.</translation>
    </message>
</context>
<context>
    <name>OpenFileAction</name>
    <message>
        <location filename="../src/actions/file-actions.hpp" line="+18"/>
        <source>Open with %1</source>
        <translation>Apri con %1</translation>
    </message>
</context>
<context>
    <name>OpenInBrowserAction</name>
    <message>
        <location filename="../src/actions/app-actions.hpp" line="+117"/>
        <source>Open in browser</source>
        <translation>Apri nel browser</translation>
    </message>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+160"/>
        <source>Failed to open in browser</source>
        <translation>Impossibile aprire nel browser</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Opened in browser</source>
        <translation>Aperto nel browser</translation>
    </message>
</context>
<context>
    <name>OpenInTerminalAction</name>
    <message>
        <location filename="../src/actions/app-actions.hpp" line="-74"/>
        <source>Open in %1</source>
        <translation>Aperto in %1</translation>
    </message>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="-150"/>
        <source>Failed to start app</source>
        <translation>Impossibile avviare l’app</translation>
    </message>
</context>
<context>
    <name>OpenItemPreferencesAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="-28"/>
        <source>Open Preferences</source>
        <translation>Apri Preferenze</translation>
    </message>
</context>
<context>
    <name>OpenRawProgramAction</name>
    <message>
        <location filename="../src/actions/app-actions.hpp" line="+25"/>
        <source>Execute program</source>
        <translation>Esegui programma</translation>
    </message>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+35"/>
        <source>Failed to start app</source>
        <translation>Impossibile avviare l’app</translation>
    </message>
</context>
<context>
    <name>OpenSettingsCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+100"/>
        <source>Open Vicinae Settings</source>
        <translation>Apri Impostazioni Vicinae</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Open the vicinae settings window, which is an independent floating window.</source>
        <translation>Apri la finestra delle impostazioni, una finestra fluttuante a parte.</translation>
    </message>
</context>
<context>
    <name>OpenSettingsPaneAction</name>
    <message>
        <location filename="../src/root-search/macos-settings/macos-settings-root-provider.mm" line="-143"/>
        <source>Failed to open System Settings</source>
        <translation>Impossibile aprire Impostazioni di Sistema</translation>
    </message>
</context>
<context>
    <name>OpenShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="-161"/>
        <source>No default app to open %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>No app with id %1</source>
        <translation>Nessun’app con ID %1</translation>
    </message>
    <message>
        <location line="+12"/>
        <location line="+7"/>
        <source>Open shortcut</source>
        <translation>Apri scorciatoia</translation>
    </message>
</context>
<context>
    <name>OpenShortcutFromSearchText</name>
    <message>
        <location line="+43"/>
        <source>Open shortcut</source>
        <translation>Apri scorciatoia</translation>
    </message>
</context>
<context>
    <name>OpenVicinaeConfig</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="-76"/>
        <source>Open Config File</source>
        <translation>Apri File di Configurazione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open the main vicinae configuration file</source>
        <translation>Apri il file di configurazione principale di Vicinae</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Show Log File</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open the Vicinae log file in your file browser</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>OpenWindowsSettingAction</name>
    <message>
        <location filename="../src/root-search/windows-settings/windows-settings-root-provider.cpp" line="+147"/>
        <source>Failed to open settings</source>
        <translation>Impossibile aprire le impostazioni</translation>
    </message>
</context>
<context>
    <name>OpenWithAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+119"/>
        <source>Open with...</source>
        <translation>Apri con...</translation>
    </message>
</context>
<context>
    <name>PasteLastScreenshotCommand</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshots-extension.hpp" line="+30"/>
        <source>Paste Last Screenshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Paste the most recent saved screenshot into the active app.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PasteToFocusedWindowAction</name>
    <message>
        <location filename="../src/actions/clipboard-actions.hpp" line="+16"/>
        <source>Paste to %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Paste to active window</source>
        <translation>Incolla nella finestra attiva</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Copy to focused window</source>
        <translation>Copia nella finestra attiva</translation>
    </message>
</context>
<context>
    <name>PinCalculatorHistoryRecordAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="+28"/>
        <source>Entry pinned</source>
        <translation>Elemento appeso</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Pin entry</source>
        <translation>Appendi elemento</translation>
    </message>
</context>
<context>
    <name>PinClipboardAction</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="-27"/>
        <source>Selection pinned</source>
        <translation>Elemento appeso</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Selection unpinned</source>
        <translation>Elemento staccato</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to change pin status</source>
        <translation>Impossibile appendere/staccare</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Pin</source>
        <translation>Appendi</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Unpin</source>
        <translation>Stacca</translation>
    </message>
</context>
<context>
    <name>PinEmojiAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="-345"/>
        <source>Pin emoji</source>
        <translation>Appendi emoji</translation>
    </message>
</context>
<context>
    <name>PinWindowAction</name>
    <message>
        <location filename="../src/actions/window-actions.hpp" line="+37"/>
        <source>Unpin from all workspaces</source>
        <translation>Stacca da ogni spazio di lavoro</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Pin to all workspaces</source>
        <translation>Attacca in ogni spazio di lavoro</translation>
    </message>
</context>
<context>
    <name>PlayPauseCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="-100"/>
        <source>Play / Pause</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Toggle playback of the active media player</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>player</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to toggle playback</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Paused</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Playing %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>PowerManagementCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="-248"/>
        <source>Failed to execute custom program %1</source>
        <translation>Impossibile eseguire programma personalizzato %1</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Are you sure</source>
        <translation>Sei sicuro/a</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>High-impact operation, please confirm</source>
        <translation>Operazione a forte impatto, per favore conferma</translation>
    </message>
</context>
<context>
    <name>PowerManagementExtension</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.hpp" line="+8"/>
        <source>Power Management</source>
        <translation>Gestione Alimentazione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Power off, suspend, sleep, hibernate your computer.</source>
        <translation>Spegni, sospendi, o iberna il tuo computer.</translation>
    </message>
</context>
<context>
    <name>PowerOffCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="+137"/>
        <source>Power Off System</source>
        <translation>Spegni Sistema</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Power off the system</source>
        <translation>Spegni il sistema</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>System cannot power off</source>
        <translation>Il sistema non può spegnersi</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to power off</source>
        <translation>Impossibile spegnere</translation>
    </message>
</context>
<context>
    <name>PreferenceSchema</name>
    <message>
        <location filename="../src/services/app-service/app-preferences.hpp" line="+34"/>
        <source>Default action</source>
        <translation type="unfinished">Azione predefinita</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Action to perform when the return key is pressed. Always default to &apos;launch&apos; if the app has no open window.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Focus window</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Launch app</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Launch Prefix</source>
        <translation type="unfinished">Prefisso d’Avvio</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Custom app launcher to use. Affects applications as well as their sub-actions.</source>
        <translation type="unfinished">Launcher personalizzato da usare. Tocca sia le applicazioni che le loro sotto-azioni.</translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+9"/>
        <location line="+6"/>
        <source>Application directories</source>
        <translation type="unfinished">Cartelle delle applicazioni</translation>
    </message>
    <message>
        <location line="-14"/>
        <source>Directories applications are sourced from. The list cannot be modified directly. In order to do so, you need to append additonal paths to the &lt;b&gt;XDG_DATA_DIRS&lt;/b&gt; environment variables.</source>
        <translation type="unfinished">Cartelle dove cercare le applicazioni. La lista non può essere direttamente modificata. Per farlo, devi aggiugnere percorsi aggiuntivi alla variabile d’ambiente &lt;b&gt;XDG_DATA_DIRS&lt;/b&gt;.</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Directories applications are sourced from.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Directories applications are sourced from. System directories are always scanned and cannot be removed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/builtins/clipboard/clipboard-preferences.hpp" line="+62"/>
        <source>Clipboard monitoring</source>
        <translation type="unfinished">Monitoring Appunti</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Whether new clipboard selections are appended to the history</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Ignore Passwords</source>
        <translation type="unfinished">Ignora Password</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Ignore selections that can be identified as a password. May not work with all apps.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Preserve tagged</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Never evict or mass delete selections that have been explicitly tagged (pinned, custom keyword)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Excluded apps</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Never add selections copied from these apps to the history</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Eviction threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Automatically delete selections older than this threshold</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Never</source>
        <translation type="unfinished">mai</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>15 minutes</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 hour</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 day</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 week</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 month</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>1 year</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Erase on startup</source>
        <translation type="unfinished">Cancella ad ogni avvio</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Erase clipboard history every time the vicinae server is started</source>
        <translation type="unfinished">Elimina la cronologia degli appunti ad ogni avvio del server di Vicinae</translation>
    </message>
    <message>
        <location line="+11"/>
        <location filename="../src/builtins/system/system-run-model.hpp" line="-21"/>
        <location filename="../src/builtins/vicinae/emoji-preferences.hpp" line="+27"/>
        <source>Default Action</source>
        <translation type="unfinished">Azione Predefinita</translation>
    </message>
    <message>
        <location line="+1"/>
        <location filename="../src/builtins/vicinae/emoji-preferences.hpp" line="+1"/>
        <source>The default action to perform on pressing return. Paste is only available if your environment supports it.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <location filename="../src/builtins/vicinae/emoji-preferences.hpp" line="+6"/>
        <source>Paste</source>
        <translation type="unfinished">Incolla</translation>
    </message>
    <message>
        <location line="+2"/>
        <location filename="../src/builtins/vicinae/emoji-preferences.hpp" line="+2"/>
        <source>Copy</source>
        <translation type="unfinished">Copia</translation>
    </message>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="-201"/>
        <source>Ask for confirmation</source>
        <translation type="unfinished">Chiedi conferma</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Custom program</source>
        <translation type="unfinished">Programma personalizzato</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Custom shell command to run instead of the default implementation</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/builtins/system/browse-apps-preferences.hpp" line="+11"/>
        <source>Sort alphabetically</source>
        <translation type="unfinished">Ordina alfabeticamente</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Show hidden apps</source>
        <translation type="unfinished">Mostra app nascoste</translation>
    </message>
    <message>
        <location filename="../src/builtins/system/system-run-model.hpp" line="+1"/>
        <source>The default action to run on pressing return</source>
        <translation type="unfinished">L’azione predefinita da eseguire quando premi invio</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Run in terminal</source>
        <translation type="unfinished">Esegui nel terminale</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run in terminal (hold)</source>
        <translation type="unfinished">Esegui in un terminale (tieni aperto)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run directly</source>
        <translation type="unfinished">Esegui direttamente</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/emoji-preferences.hpp" line="+5"/>
        <source>Skin tone</source>
        <translation type="unfinished">Colore della pelle</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Skin tone to use for relevant emojis.</source>
        <translation type="unfinished">Il colore della pelle utilizzato per le emoji rilevanti.</translation>
    </message>
    <message>
        <location filename="../src/builtins/calculator/calculator-extension.hpp" line="+11"/>
        <source>Calculator Backend</source>
        <translation type="unfinished">Backend della Calcolatrice</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Which backend to use to perform calculations</source>
        <translation type="unfinished">Il backend utilizzato per fare calcoli</translation>
    </message>
    <message>
        <location filename="../src/builtins/file/file-extension.hpp" line="-44"/>
        <source>Enabled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Whether to run the file indexer in the background. When turned off, the indexer process is stopped entirely and file search becomes unavailable until it is turned back on.</source>
        <translation type="unfinished">Indica se indicizzare i file in background. Se disattivato, il processo indicizzatore è sospeso del tutto e la ricerca di file non è disponibile finché non viene riattivata.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Search paths</source>
        <translation type="unfinished">Percorsi dove cercare</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Directories that Vicinae will search</source>
        <translation type="unfinished">Le cartelle in cui Vicinae cercherà</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Excluded search paths</source>
        <translation type="unfinished">Percorsi esclusi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Directories to exclude from file indexing</source>
        <translation type="unfinished">Le cartelle in cui Vicinae NON cercherà</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Search backend</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Automatic uses Everything when it is running and falls back to Windows Search otherwise.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Automatic</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Windows Search</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Everything</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Everything instance</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Name of the Everything instance to connect to. Leave empty for the default instance, the Everything 1.5 alpha runs as &quot;1.5a&quot;.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/builtins/snippet/snippet-extension.hpp" line="+23"/>
        <source>Expansion</source>
        <translation type="unfinished">Espansione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Enable automatic snippet expansion when triggers are typed</source>
        <translation type="unfinished">Attiva l’espansione automatica degli snippet quando sono rilevati</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Undo</source>
        <translation type="unfinished">Annulla</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Press backspace immediately after expansion to undo and restore the trigger text</source>
        <translation type="unfinished">Premi indietro immediatamente dopo l’espansione per annullarla e ripristinare il testo</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Keyboard layout</source>
        <translation type="unfinished">Layout tastiera</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>XKB layout used for trigger detection (e.g. &quot;us&quot;, &quot;fr&quot;). Leave empty for system default.</source>
        <translation type="unfinished">Layout XKB usato per la rilevazione (es. &quot;us&quot;, &quot;it&quot;). Lascia vuoto per usare il layout di sistema.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Pre-paste delay (ms)</source>
        <translation type="unfinished">Delay prima di incollare (ms)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Delay between setting clipboard and injecting paste shortcut. Increase if expansions paste empty on slow compositors.</source>
        <translation type="unfinished">Delay tra quando vengono aggiornati gli appunti e quando viene incollato. Aumentalo se l’espansione non incolla nulla su compositor lenti.</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Key injection delay (ms)</source>
        <translation type="unfinished">Delay prima di inserire tasti (ms)</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Delay between injected key events. Increase if expansions produce missing or garbled characters on slow compositors.</source>
        <translation type="unfinished">Delay tra l’inseriemnto di eventi di tastiera. Aumenta se l’espansione produce caratteri misti o alterati su compositor lenti.</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/store-intro-preferences.hpp" line="+10"/>
        <source>Always show intro</source>
        <translation type="unfinished">Mostra sempre introduzione</translation>
    </message>
    <message>
        <location filename="../src/root-search/scripts/script-root-provider.hpp" line="+135"/>
        <source>Custom directories</source>
        <translation type="unfinished">Cartelle personalizzate</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Additional list of directories to source scripts from. These directories always take precedence over the default system ones</source>
        <translation type="unfinished">Una lista aggiuntiva di cartelle in cui cercare script. Queste cartelle hanno la precedenza su quelle predefinite</translation>
    </message>
</context>
<context>
    <name>PreviewFontAction</name>
    <message>
        <location filename="../src/builtins/font/font-grid-model.cpp" line="-123"/>
        <source>Preview font</source>
        <translation>Anteprima font</translation>
    </message>
</context>
<context>
    <name>PreviousTrackCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="+43"/>
        <location line="+26"/>
        <source>Previous Track</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-25"/>
        <source>Skip to the previous track</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>player</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>%1 cannot skip to the previous track</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to skip to the previous track</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ProgramsSection</name>
    <message>
        <location filename="../src/builtins/system/system-run-model.hpp" line="+35"/>
        <source>Programs (%1)</source>
        <translation>Programmi (%1)</translation>
    </message>
    <message>
        <location filename="../src/builtins/system/system-run-model.cpp" line="+52"/>
        <source>Open in %1 (hold)</source>
        <translation>Apri in %1 (mantieni)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open in %1</source>
        <translation>Apri in %1</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Copy exec path</source>
        <translation>Copia percorso dell’eseguibile</translation>
    </message>
</context>
<context>
    <name>ProviderSearchSection</name>
    <message>
        <location filename="../src/builtins/root/provider-search-model.hpp" line="+11"/>
        <source>Results ({count})</source>
        <translation>Risultati ({count})</translation>
    </message>
</context>
<context>
    <name>ProviderSearchViewHost</name>
    <message>
        <location filename="../src/builtins/root/provider-search-view-host.cpp" line="+15"/>
        <source>Search %1</source>
        <translation>Cerca in %1</translation>
    </message>
</context>
<context>
    <name>PutCalculatorAnswerInSearchBar</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="-20"/>
        <source>Put answer in search bar</source>
        <translation>Inserisci risposta nella barra di ricerca</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <location filename="../src/utils/utils.cpp" line="+48"/>
        <source>in the future</source>
        <translation>In futuro</translation>
    </message>
    <message numerus="yes">
        <location line="+8"/>
        <source>%n year(s) ago</source>
        <translation>
            <numerusform>%n anno fa</numerusform>
            <numerusform>%n anni fa</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location line="+3"/>
        <source>%n month(s) ago</source>
        <translation>
            <numerusform>%n mese fa</numerusform>
            <numerusform>%n mesi fa</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location line="+2"/>
        <source>%n day(s) ago</source>
        <translation>
            <numerusform>%n giorno fa</numerusform>
            <numerusform>%n giorni fa</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location line="+2"/>
        <source>%n hour(s) ago</source>
        <translation>
            <numerusform>%n ora fa</numerusform>
            <numerusform>%n ore fa</numerusform>
        </translation>
    </message>
    <message numerus="yes">
        <location line="+2"/>
        <source>%n minute(s) ago</source>
        <translation>
            <numerusform>%n minuto fa</numerusform>
            <numerusform>%n minuti fa</numerusform>
        </translation>
    </message>
    <message>
        <location line="+2"/>
        <source>just now</source>
        <translation>Praticamente ora</translation>
    </message>
</context>
<context>
    <name>QuitAppAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="-108"/>
        <source>Quit Application</source>
        <translation>Chiudi l’Applicazione</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to quit %1</source>
        <translation>Impossibile chiudere %1</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Quit %1</source>
        <translation>%1 Chiusa</translation>
    </message>
</context>
<context>
    <name>RaycastCompatExtension</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-compat-extension.hpp" line="+15"/>
        <source>Raycast compatibility features</source>
        <translation>&gt;Funzionalità di compatibilità Raycast</translation>
    </message>
</context>
<context>
    <name>RaycastStoreCommand</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-store-command.hpp" line="+15"/>
        <source>Install compatible extensions from the Raycast store</source>
        <translation>Installa estensioni compatibili dal negozio Raycast</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>
# Welcome to the Raycast Extension Store

Vicinae provides direct integration with the official [Raycast store](https://www.raycast.com/store), allowing you to search and install Raycast extensions directly from Vicinae.
</source>
        <translation>
# Benvenuto nel negozio di estensioni Raycast

Vicinae si integra con il [negozio Raycast](https://www.raycast.com/store) ufficiale, permettendoti di cercare ed installare estensioni Raycast direttamente da Vicinae.
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>
Each extension has a colored compatibility indicator showing how well it works on Linux.

Vicinae also has its own [extension store](vicinae://launch/core/store), which does not suffer from these limitations.
</source>
        <translation>
Ogni estensione ha un indicatore di compatibilità colorato che mostra come funziona su Linux.

Vicinae ha anche il proprio [negozio d’estensioni](vicinae://launch/core/store), che non soffre di queste limitazioni.
</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>
Vicinae also has its own [extension store](vicinae://launch/core/store).
</source>
        <translation>
Vicinae ha anche il proprio [negozio d’estensioni](vicinae://launch/core/store).
</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Continue to store</source>
        <translation>Continua nel negozio</translation>
    </message>
</context>
<context>
    <name>RaycastStoreDetailHost</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-store-detail-host.cpp" line="+41"/>
        <source>Failed to load extension</source>
        <translation>Impossibile caricare estensione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The extension &quot;%1&quot; could not be loaded. It may not exist or the store may be unreachable.</source>
        <translation>Impossibile caricare l’estensione ’%1’. Potrebbe non esistere o il negozio potrebbe non essere raggiungibile.</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Extension Store - %1</source>
        <translation>Negozio d’estensioni - %1</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>This extension should be fully compatible.</source>
        <translation>Quest’estensione dovrebbe essere completamente compatibile.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>This extension works but has a few quirks.</source>
        <translation>Quest’estensione funziona con qualche problema.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>This extension is not compatible.</source>
        <translation>Quest’estensione non è compatibile.</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>No compatibility data is available for this extension.</source>
        <translation>Nessun dato disponibile sulla compatibilità di quest’estensione.</translation>
    </message>
    <message>
        <location line="+21"/>
        <source>No compatibility data is available — this extension may or may not work.</source>
        <translation>Nessun dato disponibile sulla compatibilità - quest’estensione potrebbe funzionare oppure no.</translation>
    </message>
    <message>
        <location line="+75"/>
        <source>Extension Store</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Report issue</source>
        <translation>Segnala un problema</translation>
    </message>
</context>
<context>
    <name>RaycastStoreSection</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-store-model.cpp" line="+46"/>
        <source>Show details</source>
        <translation>Mostra dettagli</translation>
    </message>
</context>
<context>
    <name>RaycastStoreViewHost</name>
    <message>
        <location filename="../src/builtins/raycast/raycast-store-view-host.cpp" line="+36"/>
        <source>Browse Raycast extensions</source>
        <translation>Naviga estensioni Raycast</translation>
    </message>
    <message>
        <location line="+32"/>
        <source>Failed to fetch extensions</source>
        <translation>Impossibile trovare le estensioni</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Extensions</source>
        <translation>Estensioni</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to search extensions</source>
        <translation>Impossibile cercare estensioni</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Results</source>
        <translation>Risultati</translation>
    </message>
</context>
<context>
    <name>RebootCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="+125"/>
        <source>Reboot System</source>
        <translation>Riavvia Sistema</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reboot the system</source>
        <translation>Riavia il sistema</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>System can&apos;t reboot</source>
        <translation>Il sistema non può riavviarsi</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to reboot</source>
        <translation>Impossibile riavviare</translation>
    </message>
</context>
<context>
    <name>RebuildFileIndexCommand</name>
    <message>
        <location filename="../src/builtins/file/file-extension.hpp" line="-62"/>
        <source>Rebuild File Index</source>
        <translation>Ricostruisci Indice File</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Fully rebuild the file index. Running this manually can be useful if the file search feels particularly out of date.</source>
        <translation>Ricostruisce interamente l’indice dei file. L’esecuzione manuale può aiutare se l’indice di ricerca è particolarmente datato.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Are you sure?</source>
        <translation>Êtes-vous sûr ?</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Rebuilding the entire index can be time consuming and CPU intensive, depending on the number of files present in your home directory.</source>
        <translation>Ricostruire l’intero indice può richiedere tempo e occupare la CPU, a dipendenza del numero di file presenti nella tua cartella utente.</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Reset</source>
        <translation>Ripristina</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Index rebuild started...</source>
        <translation>Ricostruzione dell’indice avviata...</translation>
    </message>
</context>
<context>
    <name>RefreshAppsCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/refresh-apps-command.hpp" line="+12"/>
        <source>Refresh Apps</source>
        <translation>Aggiorna Lista App</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Force a refresh of the application database. The database should normally automatically update itself on changes, but this can help working around some edge cases.</source>
        <translation>Forza l’aggiornamento del database applicazioni. Normalmente questo database si aggiorna da solo quando serve, ma quest’opzione può aiutare in casi specifici.</translation>
    </message>
    <message>
        <location filename="../src/builtins/vicinae/refresh-apps-command.cpp" line="+15"/>
        <source>Apps successfully refreshed</source>
        <translation>Lista app aggiornata</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to refresh apps</source>
        <translation>Impossibile aggiornare la lista di applicazioni</translation>
    </message>
</context>
<context>
    <name>ReloadScriptDirectoriesCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="+76"/>
        <source>Reload Script Directories</source>
        <translation>Ricarica Cartelle Script</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Reload script directories</source>
        <translation>Ricarica le cartelle degli script</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>New scan triggered, index will update shortly</source>
        <translation>Nuova scansione avviata, l’indice sarà aggiornato a breve</translation>
    </message>
</context>
<context>
    <name>RemoveAllCalculatorHistoryRecordsAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="+76"/>
        <source>Delete all entries</source>
        <translation>Elimina tutti gli elementi</translation>
    </message>
</context>
<context>
    <name>RemoveAllSelectionsAction</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="+28"/>
        <source>Are you sure?</source>
        <translation>Sei sicuro/a?</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>All your clipboard history will be lost forever</source>
        <translation>Tutta la cronologia degli appunti andrà persa per sempre</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Delete all</source>
        <translation>Elimina tutto</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>All selections were removed</source>
        <translation>Tutti gli elementi sono stati eliminati</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove all selections</source>
        <translation>Impossibile eliminare tutto</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Remove all</source>
        <translation>Elimina tutto</translation>
    </message>
</context>
<context>
    <name>RemoveCalculatorHistoryRecordAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="-22"/>
        <source>Entry removed</source>
        <translation>Elemento eliminato</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove entry</source>
        <translation>Impossibile eliminare l’elemento</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Delete entry</source>
        <translation>Elimina l’elemento</translation>
    </message>
</context>
<context>
    <name>RemoveSelectionAction</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-actions.hpp" line="-71"/>
        <source>Entry removed</source>
        <translation>Elemento eliminato</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove entry</source>
        <translation>Impossibile eliminare l’elemento</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Remove entry</source>
        <translation>Elimina elemento</translation>
    </message>
</context>
<context>
    <name>RemoveShortcutAction</name>
    <message>
        <location filename="../src/actions/shortcut-actions.hpp" line="+33"/>
        <source>Removed link</source>
        <translation>Collegamento rimosso</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove link</source>
        <translation>Impossibile rimuovere il collegamento</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Remove link</source>
        <translation>Rimuovi collegamento</translation>
    </message>
</context>
<context>
    <name>ReportVicinaeBugCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/report-bug-command.hpp" line="+10"/>
        <source>Report a Vicinae Bug</source>
        <translation>Segnala un Bug di Vicinae</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Navigate to Vicinae issue creation page with all relevant informations pre-filled.</source>
        <translation>Vai alla pagina per segnalare un bug di Vicinae con le informazioni rilevanti pre-compilate.</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Title</source>
        <translation>Titolo</translation>
    </message>
</context>
<context>
    <name>ResetEmojiRankingAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="+21"/>
        <source>Reset ranking</source>
        <translation>Ripristina ordine</translation>
    </message>
</context>
<context>
    <name>ResetEmojiSkinToneAction</name>
    <message>
        <location line="+34"/>
        <source>Reset to preference</source>
        <translation>Ripristina alla preferenza</translation>
    </message>
</context>
<context>
    <name>ResetItemRanking</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="-69"/>
        <source>Ranking was successfully reset</source>
        <translation>L’ordine è stato ripristinato con successo</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Unable to reset ranking</source>
        <translation>Impossibile ripristinare l’ordine</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Are you sure?</source>
        <translation>Sei sicuro/a?</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You will have to rebuild search history for this item in order for it to reappear on top of the root search results.</source>
        <translation>Dovrai ricostruire la cronologia di ricerca perché questo riappaia in cima ai risultati di ricerca.</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Reset</source>
        <translation>Ripristina</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Reset ranking</source>
        <translation>Ripristina l’odine</translation>
    </message>
</context>
<context>
    <name>RevealFileInFolderAction</name>
    <message>
        <location filename="../src/utils/file-list-item.hpp" line="+31"/>
        <source>Show in file browser</source>
        <translation>Mostra nel gestore file</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to open folder</source>
        <translation>Impossibible aprire la cartella</translation>
    </message>
</context>
<context>
    <name>RootCalculatorSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.hpp" line="+89"/>
        <source>Calculator</source>
        <translation>Calcolatrice</translation>
    </message>
    <message>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="+175"/>
        <source>Copy unformatted answer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RootFallbackSection</name>
    <message>
        <location line="+259"/>
        <source>Use &quot;%1&quot; with...</source>
        <translation>Usa ’%1’ con...</translation>
    </message>
</context>
<context>
    <name>RootFavoritesSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.hpp" line="+67"/>
        <source>Favorites</source>
        <translation>Preferiti</translation>
    </message>
</context>
<context>
    <name>RootFilesSection</name>
    <message>
        <location line="+52"/>
        <source>Files</source>
        <translation>File</translation>
    </message>
</context>
<context>
    <name>RootLinkSection</name>
    <message>
        <location line="-141"/>
        <source>Link</source>
        <translation>Collegamenti</translation>
    </message>
    <message>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="-311"/>
        <source>Open in %1</source>
        <translation>Apri in %1</translation>
    </message>
</context>
<context>
    <name>RootNewsSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.hpp" line="+66"/>
        <source>What&apos;s New</source>
        <translation>Novità</translation>
    </message>
</context>
<context>
    <name>RootResultsSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="+204"/>
        <source>Suggestions</source>
        <translation>Suggerimenti</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Results (%1)</source>
        <translation>Risultati (%1)</translation>
    </message>
</context>
<context>
    <name>RootSearchActionGenerator</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="+71"/>
        <source>Copy ID</source>
        <translation>Copia ID</translation>
    </message>
</context>
<context>
    <name>RootShortcutItem</name>
    <message>
        <location filename="../src/root-search/shortcuts/shortcut-root-provider.cpp" line="+70"/>
        <location line="+11"/>
        <source>Shortcut</source>
        <translation>Scorciatoia</translation>
    </message>
</context>
<context>
    <name>RootUpdateSection</name>
    <message>
        <location filename="../src/builtins/root/root-search-sources.hpp" line="-21"/>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="-124"/>
        <source>Update</source>
        <translation>Aggiornamento</translation>
    </message>
    <message>
        <location filename="../src/builtins/root/root-search-sources.cpp" line="-13"/>
        <source>Vicinae %1 is available</source>
        <translation>Vicinae %1 è disponibile</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>You are running %1</source>
        <translation>Stai utilizzando %1</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>View Release Notes</source>
        <translation>Vedi Note d’Aggiornamento</translation>
    </message>
</context>
<context>
    <name>RootViewHost</name>
    <message>
        <location filename="../src/builtins/root/root-view-host.hpp" line="+15"/>
        <source>Search for anything...</source>
        <translation>Cerca qualunque cosa...</translation>
    </message>
</context>
<context>
    <name>RunAppleShortcutAction</name>
    <message>
        <location filename="../src/root-search/apple-shortcuts/apple-shortcut-root-provider.cpp" line="-29"/>
        <source>Run Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Failed to start shortcut</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>RunExecutableAction</name>
    <message>
        <location filename="../src/utils/file-list-item.hpp" line="+50"/>
        <source>Run executable</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to give executable permission</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to start executable</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScreenshotActions</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshot-actions.cpp" line="+15"/>
        <source>Refresh</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Cannot paste</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Allow Accessibility access to paste into other apps.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Could not read recording</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Could not read screenshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The file may have been moved or deleted.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Could not paste recording</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Could not paste screenshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Recording copied</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Screenshot copied</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Could not copy recording</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Could not copy screenshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>No saved screenshots found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Take a screenshot and save it to a file first.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Refreshing...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Could not refresh all screenshots and recordings</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Refreshed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Paste Recording</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Paste Screenshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy Recording</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Copy Screenshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Open Recording</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Open Screenshot</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Could not open file</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Show in Finder</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Show in File Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Could not show file in file browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy File Path</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Move to Trash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>File moved to Trash</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Could not move file to Trash</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScreenshotGridModel</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshot-grid-model.cpp" line="+80"/>
        <source>Today</source>
        <translation type="unfinished">Oggi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Yesterday</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Older</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Search Results</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScreenshotGridSource</name>
    <message>
        <location line="-79"/>
        <source>Screen Recording</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Recording · %1</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScreenshotsExtension</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshots-extension.hpp" line="+17"/>
        <source>Screenshots</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Search and share saved screenshots and screen recordings.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScreenshotsView</name>
    <message>
        <location filename="../src/ui/qml/views/ScreenshotsView.qml" line="+10"/>
        <source>No screenshots or recordings found</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Save a screenshot or screen recording to a file, or try another search.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScreenshotsViewHost</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshots-view-host.cpp" line="+13"/>
        <source>Search screenshots and recordings...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ScriptExecutorViewHost</name>
    <message>
        <location filename="../src/script/script-executor-view-host.cpp" line="+79"/>
        <source>Script execution failed: %1</source>
        <translation>Esecuzione dello script fallita: %1</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Running... (%1s ago)</source>
        <translation>In corso... (il y a %1s)</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Done in %1s (exit=%2)</source>
        <translation>Terminato in %1s (exit=%2)</translation>
    </message>
    <message>
        <location line="+12"/>
        <location line="+9"/>
        <source>Script process killed</source>
        <translation>Processo dello script terminato</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Running...</source>
        <translation>In corso...</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Kill process</source>
        <translation>Termina processo</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Run script again</source>
        <translation>Esegui lo script di nuovo</translation>
    </message>
</context>
<context>
    <name>ScriptRootItem</name>
    <message>
        <location filename="../src/root-search/scripts/script-root-provider.hpp" line="-110"/>
        <location line="+87"/>
        <source>Script</source>
        <translation>Script</translation>
    </message>
    <message>
        <location line="-44"/>
        <source>Mode</source>
        <translation>Modalità</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Path</source>
        <translation>Percorso</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Author</source>
        <translation>Autore</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Open script directory</source>
        <translation>Apri la cartella degli script</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy path to script</source>
        <translation>Copia il percorso dello script</translation>
    </message>
</context>
<context>
    <name>ScriptRootProvider</name>
    <message>
        <location line="+63"/>
        <source>Script Commands</source>
        <translation>Comandi Script</translation>
    </message>
</context>
<context>
    <name>SearchBrowserTabsCommand</name>
    <message>
        <location filename="../src/builtins/browser/browser-extension.cpp" line="+15"/>
        <source>Search Browser Tabs</source>
        <translation>Cerca Schede Browser</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search tabs from all connected browsers</source>
        <translation>Cerca schede da tutti i browser connessi</translation>
    </message>
</context>
<context>
    <name>SearchEmojiCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/search-emoji-command.hpp" line="+16"/>
        <source>Search Emojis &amp; Symbols</source>
        <translation>Cerca Emoji e Simboli</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search for any emoji or symbol</source>
        <translation>Cerca una qualsiasi emoji o simbolo</translation>
    </message>
</context>
<context>
    <name>SearchEmojiGridSource</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.hpp" line="-20"/>
        <source>Results (%1)</source>
        <translation>Risultati (%1)</translation>
    </message>
</context>
<context>
    <name>SearchFilesCommand</name>
    <message>
        <location filename="../src/builtins/file/file-extension.hpp" line="-34"/>
        <source>Search Files</source>
        <translation>Cerca File</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search files on your system</source>
        <translation>Cerca file nel tuo sistema</translation>
    </message>
</context>
<context>
    <name>SearchFilesView</name>
    <message>
        <location filename="../src/ui/qml/views/SearchFilesView.qml" line="+37"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Path</source>
        <translation>Percorso</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Type</source>
        <translation>Tipo</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Last modified</source>
        <translation>Ultima modifica</translation>
    </message>
</context>
<context>
    <name>SearchFilesViewHost</name>
    <message>
        <location filename="../src/builtins/file/search-files-view-host.cpp" line="+55"/>
        <source>Search for files...</source>
        <translation>Cerca file...</translation>
    </message>
    <message>
        <location line="+31"/>
        <location line="+4"/>
        <source>Direct file path</source>
        <translation>Percorso diretto del file</translation>
    </message>
    <message>
        <location line="+38"/>
        <source>Recently Accessed</source>
        <translation>Aperti di recente</translation>
    </message>
    <message>
        <location line="+43"/>
        <source>Results</source>
        <translation>Risultati</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Recently Modified</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+40"/>
        <source>All</source>
        <translation>Tutti</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Other</source>
        <translation>Altri</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Directories</source>
        <translation>Cartelle</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Images</source>
        <translation>Immagini</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Videos</source>
        <translation>Video</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Audio</source>
        <translation>Audio</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Documents</source>
        <translation>Documenti</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Archives</source>
        <translation>Archivi</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Applications</source>
        <translation>Applicazioni</translation>
    </message>
</context>
<context>
    <name>SearchMenuBarCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/search-menu-bar-command.hpp" line="+11"/>
        <source>Search Menu Bar Items</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Search and run menu bar items of the frontmost application</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SearchScreenshotsCommand</name>
    <message>
        <location filename="../src/builtins/screenshots/screenshots-extension.hpp" line="-38"/>
        <source>Search Screenshots</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Search and share saved screenshots and screen recordings.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SearchTrayCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/search-tray-command.hpp" line="+10"/>
        <source>Search Tray</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browse system tray items and trigger their menu actions</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SearchTrayViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/search-tray-view-host.hpp" line="+122"/>
        <source>Search tray items...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+16"/>
        <source>Attention</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Browse Menu</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Activate</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Secondary Activate</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SetAppFont</name>
    <message>
        <location filename="../src/builtins/font/font-grid-model.cpp" line="-15"/>
        <source>Set as vicinae font</source>
        <translation>Imposta come font di Vicinae</translation>
    </message>
</context>
<context>
    <name>SetDefaultBrowser</name>
    <message>
        <location filename="../src/builtins/system/system-extension.hpp" line="+117"/>
        <source>Set Default Browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Change the default system web browser</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SetDefaultBrowserViewHost</name>
    <message>
        <location filename="../src/builtins/system/set-default-browser-view-host.hpp" line="+22"/>
        <source>Select a web browser...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Available web browsers</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Set as default browser</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Default browser changed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to set default browser</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SetDefaultTerminal</name>
    <message>
        <location filename="../src/builtins/system/system-extension.hpp" line="-11"/>
        <source>Set Default Terminal</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Change the default system terminal</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SetRootItemAliasAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.hpp" line="-34"/>
        <source>Set alias</source>
        <translation>Definisci alias</translation>
    </message>
</context>
<context>
    <name>SetRootItemShortcutAction</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="+103"/>
        <source>Set Global Shortcut</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SetThemeAction</name>
    <message>
        <location filename="../src/actions/theme-actions.cpp" line="+11"/>
        <source>Theme successfully updated</source>
        <translation>Tema aggiornato correttamente</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Set theme</source>
        <translation>Applica tema</translation>
    </message>
</context>
<context>
    <name>SetThemeCommand</name>
    <message>
        <location filename="../src/builtins/theme/set-theme-command.hpp" line="+9"/>
        <source>Set Theme</source>
        <translation>Imposta tema</translation>
    </message>
</context>
<context>
    <name>SetVolumeCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="+113"/>
        <source>Set Volume to %1%</source>
        <translation>Imposta il volume su %1%</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Set system volume to %1%</source>
        <translation>Imposta il volume di sistema su %1%</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to set volume</source>
        <translation>Impossibile regolare il volume</translation>
    </message>
</context>
<context>
    <name>SetWallpaperAction</name>
    <message>
        <location filename="../src/utils/file-list-item.hpp" line="-55"/>
        <source>Set as wallpaper</source>
        <translation>Imposta come sfondo</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Wallpaper set</source>
        <translation>Sfondo impostato</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to set wallpaper</source>
        <translation>Impossibile cambiare lo sfondo</translation>
    </message>
</context>
<context>
    <name>SettingsPreferenceForm</name>
    <message>
        <location filename="../src/ui/qml/settings/SettingsPreferenceForm.qml" line="+161"/>
        <source>Select an app…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Add app…</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SettingsSidebar</name>
    <message>
        <location filename="../src/ui/qml/settings/SettingsSidebar.qml" line="+126"/>
        <source>Search...</source>
        <translation>Cerca...</translation>
    </message>
</context>
<context>
    <name>SettingsSidebarModel</name>
    <message>
        <location filename="../src/ui/settings/settings-sidebar-model.cpp" line="+90"/>
        <source>General</source>
        <translation>Generali</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Appearance</source>
        <translation>Aspetto</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Keybindings</source>
        <translation>Scorciatoie</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced</source>
        <translation>Avanzate</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>About</source>
        <translation>Informazioni</translation>
    </message>
</context>
<context>
    <name>SettingsWindow</name>
    <message>
        <location filename="../src/ui/qml/settings/SettingsWindow.qml" line="+13"/>
        <source>General</source>
        <translation>Generali</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Appearance</source>
        <translation>Aspetto</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Keybindings</source>
        <translation>Scorciatoie</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Advanced</source>
        <translation>Avanzate</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>About</source>
        <translation>Informazioni</translation>
    </message>
    <message>
        <location line="+27"/>
        <source>Vicinae Settings</source>
        <translation>Impostazioni di Vicinae</translation>
    </message>
    <message>
        <location line="+199"/>
        <source>Imported from Raycast</source>
        <translation>Importate da Raycast</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>From the Vicinae store</source>
        <translation>Dal negozio di Vicinae</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Locally installed extension</source>
        <translation>Estensioni installate localmente</translation>
    </message>
</context>
<context>
    <name>ShortcutExtension</name>
    <message>
        <location filename="../src/builtins/shortcut/shortcut-extension.hpp" line="+11"/>
        <source>Manage Shortcuts</source>
        <translation>Gestisci Scorciatoie</translation>
    </message>
</context>
<context>
    <name>ShortcutField</name>
    <message>
        <location filename="../src/ui/qml/form/ShortcutField.qml" line="+16"/>
        <source>Record shortcut</source>
        <translation>Registra scorciatoia</translation>
    </message>
</context>
<context>
    <name>ShortcutFormView</name>
    <message>
        <location filename="../src/ui/qml/views/ShortcutFormView.qml" line="+15"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Shortcut Name</source>
        <translation>Nome della Scorciatoia</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>The URL that will be opened by the specified app. You can make it dynamic by using placeholders such as {argument}.</source>
        <translation>L’URL che sarà aperto dall’app specificata. Puoi renderlo dinamico tramite placeholder come {argument}.</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Open with</source>
        <translation>Apri con</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Icon</source>
        <translation>Icona</translation>
    </message>
</context>
<context>
    <name>ShortcutFormViewHost</name>
    <message>
        <location filename="../src/builtins/shortcut/shortcut-form-view-host.cpp" line="+46"/>
        <source>Submit</source>
        <translation>Conferma</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Copy of %1</source>
        <translation>Copia di %1</translation>
    </message>
    <message>
        <location line="+45"/>
        <source>Edit &quot;%1&quot;</source>
        <translation>Modifica ’%1’;</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Duplicate &quot;%1&quot;</source>
        <translation>Duplica ’%1’</translation>
    </message>
    <message>
        <location line="+9"/>
        <location line="+109"/>
        <location line="+43"/>
        <source>Default</source>
        <translation>Predefinito</translation>
    </message>
    <message>
        <location line="-136"/>
        <source>Selected Text</source>
        <translation>Testo Selezionato</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Clipboard Text</source>
        <translation>Testo degli Appunti</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Argument</source>
        <translation>Argomento</translation>
    </message>
    <message>
        <location line="+25"/>
        <location line="+5"/>
        <location line="+5"/>
        <source>Required</source>
        <translation>Richiesto</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Validation failed</source>
        <translation>Impossibile validare</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to update shortcut</source>
        <translation>Impossibile aggiornare la scorciatoia</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Shortcut updated</source>
        <translation>Scorciatoioa aggiornata</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to create shortcut</source>
        <translation>Impossibile creare la scorciatoia</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Shortcut created</source>
        <translation>Scorciatoia creata</translation>
    </message>
</context>
<context>
    <name>ShortcutRecorderCapture</name>
    <message>
        <location filename="../src/ui/qml/form/ShortcutRecorderCapture.qml" line="+28"/>
        <location line="+14"/>
        <location line="+81"/>
        <source>Recording...</source>
        <translation type="unfinished">Registro...</translation>
    </message>
    <message>
        <location line="+30"/>
        <source>Keybind updated</source>
        <translation type="unfinished">Scorciatoia aggiornata</translation>
    </message>
</context>
<context>
    <name>ShortcutRecorderPanel</name>
    <message>
        <location filename="../src/ui/qml/actions/ShortcutRecorderPanel.qml" line="+108"/>
        <source>Press Backspace to remove the current shortcut</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ShortcutRootProvider</name>
    <message>
        <location filename="../src/root-search/shortcuts/shortcut-root-provider.cpp" line="+42"/>
        <source>Shortcuts</source>
        <translation>Scorciatoie</translation>
    </message>
</context>
<context>
    <name>ShortcutsSettingsPage</name>
    <message>
        <location filename="../src/ui/qml/settings/ShortcutsSettingsPage.qml" line="+61"/>
        <source>Keybindings</source>
        <translation>Scorciatoie da Tastiera</translation>
    </message>
    <message>
        <location line="+78"/>
        <source>Record Shortcut</source>
        <translation>Registra Scorciatoia</translation>
    </message>
</context>
<context>
    <name>SkipUpdateVersionAction</name>
    <message>
        <location filename="../src/services/update/update-service.cpp" line="+8"/>
        <source>Skip This Version</source>
        <translation>Ignora Questa Versione</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Skipped %1</source>
        <translation>%1 Ignorata</translation>
    </message>
</context>
<context>
    <name>SleepCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="+94"/>
        <source>Put System to Sleep</source>
        <translation>Sospendi Sistema</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Put system to sleep</source>
        <translation>Sospende il sistema</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>System can&apos;t sleep</source>
        <translation>Il sistema non può essere sospeso</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to sleep</source>
        <translation>Impossibile sospendere</translation>
    </message>
</context>
<context>
    <name>SnippetDatabase</name>
    <message>
        <location filename="../src/services/snippet/snippet-db.cpp" line="+42"/>
        <location line="+56"/>
        <source>keyword already assigned to &quot;%1&quot;</source>
        <translation>Parola chiave già assegnata a &quot;%1&quot;</translation>
    </message>
    <message>
        <location line="-43"/>
        <source>No snippet with that ID</source>
        <translation>Nessun snippet con quest ID</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>No such snippet</source>
        <translation>Snippet non trovato</translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Snippet limit reached (%1)</source>
        <translation>Limite di snippet raggiunto (%1)</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Failed to save snippets on disk: %1</source>
        <translation>Impossibile salvare gli snippet su disco: %1</translation>
    </message>
</context>
<context>
    <name>SnippetExtension</name>
    <message>
        <location filename="../src/builtins/snippet/snippet-extension.hpp" line="+11"/>
        <source>Snippets</source>
        <translation>Snippet</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Text expansion and snippet management</source>
        <translation>Gestione d’espansione di testo e snippet</translation>
    </message>
</context>
<context>
    <name>SnippetFormView</name>
    <message>
        <location filename="../src/ui/qml/views/SnippetFormView.qml" line="+16"/>
        <source>Title</source>
        <translation>Titolo</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Euro symbol</source>
        <translation>Symbolo euro</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Content</source>
        <translation>Contenuto</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>You can use {dynamic placeholders} to make the content dynamic: &lt;a href=&quot;https://docs.vicinae.com/snippets&quot;&gt;learn more&lt;/a&gt;.</source>
        <translation>Puoi utilizzare {placeholder dinamici} per rendere dinamico il contenuto: &lt;a href=&quot;https://docs.vicinae.com/snippets&quot;&gt;scopri di più&lt;/a&gt;.</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Keyword</source>
        <translation>Parola Chiave</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Typing this keyword anywhere will result in it being replaced by the content of the snippet.</source>
        <translation>Scrivendo ovunque questa parola sarà rimpiazzata dal contenuto del tuo snippet.</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>The snippet server is not running. Keyword expansion is unavailable. &lt;a href=&quot;https://docs.vicinae.com/snippets&quot;&gt;Learn more&lt;/a&gt;.</source>
        <translation>Il server snippet non è in esecuzione. L’espandione tramite parola chiave non è disponibile. &lt;a href=&quot;https://docs.vicinae.com/snippets&quot;&gt;Scopri di più&lt;/a&gt;.</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Applications</source>
        <translation>Applicazioni</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Restrict expansion to specific applications. By default, it works everywhere.</source>
        <translation>Restringi l’espanzione ad applicazioni specifiche. Di default, funziona ovunque.</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Expand as word</source>
        <translation>Espandi come parola</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>If a keyword is typed, it will only be expanded after space or punctuation.</source>
        <translation>Se scrivi una parola chiave, sarà solo espansa dopo spazi o punteggiatura.</translation>
    </message>
</context>
<context>
    <name>SnippetFormViewHost</name>
    <message>
        <location filename="../src/builtins/snippet/snippet-form-view-host.cpp" line="+33"/>
        <source>Submit</source>
        <translation>Conferma</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Copy of %1</source>
        <translation>Copia di %1</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Edit &quot;%1&quot;</source>
        <translation>Modifica &quot;%1&quot;</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Duplicate &quot;%1&quot;</source>
        <translation>Duplica &quot;%1&quot;</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>2 chars min.</source>
        <translation>Min. 2 caratteri</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Content should not be empty</source>
        <translation>Il contenuto non può essere vuoto</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Only one {cursor} placeholder is allowed</source>
        <translation>Solo un placeholder {cursor} è permesso</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Validation failed</source>
        <translation>Impossibile validare</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Snippet updated</source>
        <translation>Snippet aggiornato</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Snippet successfully created</source>
        <translation>Snippet creato correttamente</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Cursor Position</source>
        <translation>Posizione del Cursore</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Clipboard Text</source>
        <translation>Testo Copiato</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Date</source>
        <translation>Data</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Argument</source>
        <translation>Argomento</translation>
    </message>
    <message>
        <location line="+8"/>
        <source>PowerShell Command</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Shell Command</source>
        <translation>Comando Shell</translation>
    </message>
</context>
<context>
    <name>SoftRebootCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="-99"/>
        <source>Soft Reboot System</source>
        <translation>Riavvia Parzialmente Sistema</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Soft reboot the system, which usually means only userspace is rebooted.</source>
        <translation>Riavvia Parzialmente il Sistema. Generalmente significa un riavvio solo dello spazio utente.</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>System can&apos;t soft reboot</source>
        <translation>Il sistema non può riavviarsi parzialmente</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to soft reboot</source>
        <translation>Impossibile riavviare parzialmente</translation>
    </message>
</context>
<context>
    <name>SponsorVicinaeCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.cpp" line="-118"/>
        <source>Donate to Vicinae</source>
        <translation>Dona a Vicinae</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open link to Vicinae&apos;s GitHub sponsor page</source>
        <translation>Apri il link della pagina GitHub Sponsor di Vicinae</translation>
    </message>
</context>
<context>
    <name>StoreDetailView</name>
    <message>
        <location filename="../src/ui/qml/views/StoreDetailView.qml" line="+208"/>
        <source>Installed</source>
        <translation>Installato</translation>
    </message>
    <message>
        <location line="+171"/>
        <source>Description</source>
        <translation>Descrizione</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Commands</source>
        <translation>Comandi</translation>
    </message>
    <message>
        <location line="+78"/>
        <source>Open README</source>
        <translation>Apri il README</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Last update</source>
        <translation>Ultimo aggiornamento</translation>
    </message>
    <message>
        <location line="+14"/>
        <source>Contributors</source>
        <translation>Contributori</translation>
    </message>
    <message>
        <location line="+31"/>
        <source>Categories</source>
        <translation>Categorie</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Source Code</source>
        <translation>Codice Sorgente</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>View Code</source>
        <translation>Vedi Codice</translation>
    </message>
</context>
<context>
    <name>SuspendCommand</name>
    <message>
        <location filename="../src/builtins/power-management/power-management-extension.cpp" line="+36"/>
        <source>Suspend System</source>
        <translation>Sospendi Sistema</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Suspend the system to RAM. Unlike hibernation, this does not turn the computer off and will break on power loss.</source>
        <translation>Spsnede il sistema nella RAM. Al contrario dell’ibernazoine, non spegne il computer e può risultare nella perdita di dati in mancanza di alimentazione.</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>System cannot suspend</source>
        <translation>Il sistema non può essere sospeso</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to suspend</source>
        <translation>Impossibile sospendere</translation>
    </message>
</context>
<context>
    <name>SwitchWindowsCommand</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="+89"/>
        <source>Switch Windows</source>
        <translation>Cambia Finestra</translation>
    </message>
</context>
<context>
    <name>SwitchWindowsSection</name>
    <message>
        <location filename="../src/builtins/wm/switch-windows-model.hpp" line="+28"/>
        <source>Open Windows</source>
        <translation>Finestre Aperte</translation>
    </message>
    <message>
        <location filename="../src/builtins/wm/switch-windows-model.cpp" line="+19"/>
        <source>WS %1</source>
        <translation>WS %1</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Window Actions</source>
        <translation>Azioni Finestra</translation>
    </message>
</context>
<context>
    <name>SwitchWindowsViewHost</name>
    <message>
        <location filename="../src/builtins/wm/switch-windows-view-host.cpp" line="+12"/>
        <source>Search open window...</source>
        <translation>Cerca una finestra aperta...</translation>
    </message>
</context>
<context>
    <name>SwitchWorkspacesCommand</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="+11"/>
        <source>Switch Desktops</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Switch Workspaces</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SwitchWorkspacesSection</name>
    <message>
        <location filename="../src/builtins/wm/switch-workspaces-model.hpp" line="+47"/>
        <source>%1</source>
        <translation type="unfinished"></translation>
    </message>
    <message numerus="yes">
        <location line="+3"/>
        <source>%n window(s)</source>
        <translation type="unfinished">
            <numerusform></numerusform>
            <numerusform></numerusform>
        </translation>
    </message>
    <message>
        <location line="+0"/>
        <source>empty</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+22"/>
        <source>Switch to desktop</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Switch to workspace</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SwitchWorkspacesViewHost</name>
    <message>
        <location filename="../src/builtins/wm/switch-workspaces-view-host.hpp" line="+16"/>
        <source>Open Workspaces</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../src/builtins/wm/switch-workspaces-view-host.cpp" line="+13"/>
        <source>Search desktops...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Search workspaces...</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>SystemBrowseApps</name>
    <message>
        <location filename="../src/builtins/system/system-extension.hpp" line="-17"/>
        <source>Browse Apps</source>
        <translation>Cerca App</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Browse all applications that are installed on the system</source>
        <translation>Esplora tutte le app installate sul sistema</translation>
    </message>
</context>
<context>
    <name>SystemExtension</name>
    <message>
        <location line="+39"/>
        <source>System</source>
        <translation>Sistema</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>System-related commands</source>
        <translation>Comandi di sistema</translation>
    </message>
</context>
<context>
    <name>SystemRunCommand</name>
    <message>
        <location line="-105"/>
        <source>Run Terminal Program</source>
        <translation>Esegui Programma nel Terminale</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run a program in a terminal window</source>
        <translation>Esegui un programma in una finestra di terminale</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>command</source>
        <translation>comando</translation>
    </message>
    <message>
        <location line="+26"/>
        <source>Not a valid executable</source>
        <translation>Eseguibile non valido</translation>
    </message>
</context>
<context>
    <name>SystemRunViewHost</name>
    <message>
        <location filename="../src/builtins/system/system-run-view-host.cpp" line="+19"/>
        <source>Search for a program to execute...</source>
        <translation>Cerca un programma da eseguire...</translation>
    </message>
</context>
<context>
    <name>ThemeExtension</name>
    <message>
        <location filename="../src/builtins/theme/theme-extension.hpp" line="+9"/>
        <source>Theme</source>
        <translation>Tema</translation>
    </message>
</context>
<context>
    <name>ThemeSection</name>
    <message>
        <location filename="../src/builtins/theme/theme-list-model.cpp" line="+22"/>
        <source>Default theme description</source>
        <translation>Descrizione del tema predefinito</translation>
    </message>
    <message>
        <location line="+64"/>
        <source>Open theme file</source>
        <translation>Apri il file del tema</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Copy ID</source>
        <translation>Copia ID</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy path</source>
        <translation>Copia percorso</translation>
    </message>
</context>
<context>
    <name>ThemeViewHost</name>
    <message>
        <location filename="../src/builtins/theme/theme-view-host.cpp" line="+22"/>
        <source>Search for a theme...</source>
        <translation>Cerca un tema...</translation>
    </message>
    <message>
        <location line="+53"/>
        <source>Current Theme</source>
        <translation>Tema Attuale</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Available Themes</source>
        <translation>Temi Disponibili</translation>
    </message>
</context>
<context>
    <name>ToggleFloatingWindowCommand</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="-54"/>
        <source>Toggle Floating</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Active window is not on the current workspace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No window to toggle</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ToggleFullscreenWindowCommand</name>
    <message>
        <location line="-44"/>
        <source>Toggle Fullscreen</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Active window is not on the current workspace</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No window to fullscreen</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>ToggleItemAsFavorite</name>
    <message>
        <location filename="../src/actions/root-search-actions.cpp" line="-86"/>
        <source>Remove from favorites</source>
        <translation>Togli dai preferiti</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Add to favorites</source>
        <translation>Aggiungi ai preferiti</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Successfuly added to favorites</source>
        <translation>Aggiunto ai preferiti</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Successfuly removed from favorites</source>
        <translation>Tolto dai preferiti</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Failed to add to favorites</source>
        <translation>Imposibile aggiungere ai preferiti</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to remove from favorites</source>
        <translation>Impossibile togliere dai preferiti</translation>
    </message>
</context>
<context>
    <name>ToggleMuteCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="+11"/>
        <source>Toggle Mute</source>
        <translation>Muta/Attiva Audio</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mute or unmute system audio</source>
        <translation>Muta o riattiva l’audio del sistema</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Failed to toggle mute</source>
        <translation>Impossibile mutare o rimutare l’audio</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Muted</source>
        <translation>Mutato</translation>
    </message>
</context>
<context>
    <name>ToggleOverviewCommand</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="+34"/>
        <source>Toggle Overview</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TrayMenuViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/search-tray-view-host.hpp" line="-122"/>
        <source>Search menu...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+36"/>
        <source>Trigger</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>TrayService</name>
    <message>
        <location filename="../src/services/tray/tray-service.cpp" line="+10"/>
        <source>Toggle Vicinae</source>
        <translation type="unfinished">Mostra/Nascondi Vicinae</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>About Vicinae</source>
        <translation type="unfinished">Riguardo Vicinae</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Check for Updates…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Update Available: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Settings…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Preferences…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Sponsor Vicinae</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Join the Discord</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Follow on X</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Quit Vicinae</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UninstallAppAction</name>
    <message>
        <location filename="../src/actions/app-actions.cpp" line="+20"/>
        <source>Uninstall Application</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Failed to uninstall %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Uninstalled %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Failed to quit %1</source>
        <translation type="unfinished">Impossibile chiudere %1</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>%1 did not quit, uninstall cancelled</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+12"/>
        <source>%1 is running. It will be quit and moved to the trash.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>The application will be moved to the trash.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Uninstall %1?</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>UninstallExtensionAction</name>
    <message>
        <location filename="../src/actions/extension-actions.cpp" line="+10"/>
        <source>Are you sure?</source>
        <translation>Sei sicuro/a?</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>All this extension data will be permanently lost. If you just want the extension to not appear in the root search anymore, consider disabling it instead.</source>
        <translation>Tutti i dati di quest’estensione saranno persi per sempre. Se vuoi solo nascondere l’estensione dalla schermata principale, puoi disabilitarla.</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Uninstall</source>
        <translation>Disinstalla</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Extension uninstalled</source>
        <translation>Estensione disinstallata</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Failed to uninstall extension</source>
        <translation>Impossibile disinstallare l’estensione</translation>
    </message>
    <message>
        <location filename="../src/actions/extension-actions.hpp" line="+10"/>
        <source>Uninstall Extension</source>
        <translation>Disinstalla Estensione</translation>
    </message>
</context>
<context>
    <name>UnpinCalculatorHistoryRecordAction</name>
    <message>
        <location filename="../src/actions/calculator-actions.hpp" line="-23"/>
        <source>Entry unpinned</source>
        <translation>Elemento tolto</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Unpin entry</source>
        <translation>Togli elemento</translation>
    </message>
</context>
<context>
    <name>UnpinEmojiAction</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="-45"/>
        <source>Unpin emoji</source>
        <translation>Togli emoji</translation>
    </message>
</context>
<context>
    <name>UpdateService</name>
    <message>
        <location filename="../src/services/update/update-service.cpp" line="-169"/>
        <source>Update installed</source>
        <translation>Aggiornamento installato</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Restarting…</source>
        <translation>Riavvio…</translation>
    </message>
    <message>
        <location line="+90"/>
        <source>Downloading Vicinae %1…</source>
        <translation>Download di Vicinae %1…</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Downloading Vicinae %1… %2%</source>
        <translation>Download di Vicinae %1… %2%</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Installing update…</source>
        <translation>Installazione dell’aggiornamento…</translation>
    </message>
    <message>
        <location line="+24"/>
        <source>Update failed</source>
        <translation>Impossibile aggiornare</translation>
    </message>
</context>
<context>
    <name>VicinaeExtension</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-extension.hpp" line="+11"/>
        <source>General vicinae-related commands.</source>
        <translation>Comandi generali legati a Vicinae.</translation>
    </message>
</context>
<context>
    <name>VicinaeHotkeyGlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/vicinae-hotkey-global-shortcut-backend.cpp" line="+79"/>
        <source>Compositor does not support global hotkeys</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Unsupported trigger key</source>
        <translation>Tasto d’avvio non suportato</translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Hotkey binding was lost</source>
        <translation>La scorciatoia da tastiera è andata persa</translation>
    </message>
</context>
<context>
    <name>VicinaeListInstalledExtensionsCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/list-installed-extensions-command.hpp" line="+11"/>
        <source>Show Installed Extensions</source>
        <translation>Mostra Estensioni Installate</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Show all third-party extensions that have been installed. This includes local extensions as well as extensions downloaded from the stores (vicinae and raycast).</source>
        <translation>Mostra tutte le estensioni di terze parti installate. Include estensioni sia locali che scaricate dai negozi di Vicinae e Raycast.</translation>
    </message>
</context>
<context>
    <name>VicinaeStoreCommand</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-store-command.hpp" line="+15"/>
        <source>Install extensions from the Vicinae store</source>
        <translation>Installa estensioni dal negozio di Vicinae</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>
# Welcome to the vicinae extension store

The vicinae extension store features community-built extensions that have been approved by our core contributors.

Every extension listed here has its source code available in the [vicinaehq/extensions](https://github.com/vicinaehq/extensions) repository.

If you&apos;re looking to build your own extension, take a look at the [documentation](https://docs.vicinae.com/extensions/introduction). If you think your extension would be a good fit for the store, feel free to submit it!
</source>
        <translation>
# Benvenuto nel negozio di estensioni di Vicinae

Il negozio di estensioni Vicinae contiene estensioni create dalla community approvate dai nostri sviluppatori principali.

Puoi trovare il codice sorgente di ogni estensione elencata qui su [vicinaehq/extensions](https://github.com/vicinaehq/extensions).

Se stai cercando di creare la tua estensione, dai un’occhiata alla [documentazione](https://docs.vicinae.com/extensions/introduction). Se pensi che la tua estensione sia adatta allo store, sentiti libero/a di propocela!
</translation>
    </message>
    <message>
        <location line="+13"/>
        <source>Continue to store</source>
        <translation>Avanti nel negozio</translation>
    </message>
</context>
<context>
    <name>VicinaeStoreDetailHost</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-store-detail-host.cpp" line="+36"/>
        <source>Failed to load extension</source>
        <translation>Impossibile caricare l’estensione</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Could not fetch extension data from the store.</source>
        <translation>Impossibile ricevere i dati delle estensioni dal negozio.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Extension not found</source>
        <translation>Estensione non trovata</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>The extension &quot;%1&quot; could not be found in the store.</source>
        <translation>L’estensioone &quot;%1&quot; non è stata trovata nel negozio.</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Extension Store - %1</source>
        <translation>Negozio di estensioni - %1</translation>
    </message>
    <message>
        <location line="+73"/>
        <source>Extension Store</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+17"/>
        <source>Report issue</source>
        <translation>Segnala un problema</translation>
    </message>
</context>
<context>
    <name>VicinaeStoreSection</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-store-model.cpp" line="+42"/>
        <source>Show details</source>
        <translation>Mostra dettagli</translation>
    </message>
</context>
<context>
    <name>VicinaeStoreViewHost</name>
    <message>
        <location filename="../src/builtins/vicinae/vicinae-store-view-host.cpp" line="+26"/>
        <source>Browse Vicinae extensions</source>
        <translation>Esplora le estensioni di Vicinae</translation>
    </message>
    <message>
        <location line="+23"/>
        <source>Failed to fetch extensions</source>
        <translation>Impossibile ricevere le estensioni</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Extensions</source>
        <translation>Estensioni</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Extension Store</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>VolumeDownCommand</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="-74"/>
        <source>Turn Volume Down</source>
        <translation>Abbassa Volume</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Decrease system volume</source>
        <translation>Abbassa il volume del sistema</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Invalid step value</source>
        <translation>Incremento non valido</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Failed to adjust volume</source>
        <translation>Impossibile regolare il volume</translation>
    </message>
</context>
<context>
    <name>VolumeUpCommand</name>
    <message>
        <location line="-61"/>
        <source>Turn Volume Up</source>
        <translation>Alza Volume</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Increase system volume</source>
        <translation>Alza il volume del sistema</translation>
    </message>
    <message>
        <location line="+18"/>
        <source>Invalid step value</source>
        <translation>Incremento non valido</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Failed to adjust volume</source>
        <translation>Impossibile regolare il volume</translation>
    </message>
</context>
<context>
    <name>WallpaperManager</name>
    <message>
        <location filename="../src/services/wallpaper/wallpaper-manager.cpp" line="+68"/>
        <source>Setting the wallpaper is not supported in the current environment</source>
        <translation>Il cambiamento dello sfondo non è supportato nell’ambiente attuale</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>No such file: %1</source>
        <translation>File non trovato: %1</translation>
    </message>
</context>
<context>
    <name>WinControlPanelRootItem</name>
    <message>
        <location filename="../src/root-search/control-panel/control-panel-root-provider.cpp" line="+104"/>
        <location line="+10"/>
        <source>Control Panel</source>
        <translation>Pannello di Controllo</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Where</source>
        <translation>Dove</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Open Applet</source>
        <translation>Apri Applet</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy Path</source>
        <translation>Copia Percorso</translation>
    </message>
</context>
<context>
    <name>WinControlPanelRootProvider</name>
    <message>
        <location line="+51"/>
        <source>Control Panel</source>
        <translation>Pannello di Controllo</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Control Panel applets and system tasks.</source>
        <translation>Applet del pannello di controllo e attività di sistema.</translation>
    </message>
</context>
<context>
    <name>WinControlPanelTaskRootItem</name>
    <message>
        <location line="-41"/>
        <location line="+11"/>
        <source>Control Panel</source>
        <translation>Pannello di Controllo</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Task ID</source>
        <translation>ID Attività</translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Open</source>
        <translation>Apri</translation>
    </message>
</context>
<context>
    <name>WinSettingsPage</name>
    <message>
        <location filename="../src/root-search/windows-settings/windows-settings-root-provider.cpp" line="-114"/>
        <source>Display</source>
        <translation>Schermo</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>System</source>
        <translation>Sistema</translation>
    </message>
    <message>
        <location line="-17"/>
        <source>Night Light</source>
        <translation>Luce Notturna</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Sound</source>
        <translation>Suono</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Volume Mixer</source>
        <translation>Mixel Volume</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Notifications</source>
        <translation>Notifiche</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Focus</source>
        <translation>Concentrazione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Power &amp; Battery</source>
        <translation>Alimentazione e Batteria</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Storage</source>
        <translation>Storage</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Nearby Sharing</source>
        <translation>Condivisione nelle Vicinanze</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Multitasking</source>
        <translation>Multitasking</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Activation</source>
        <translation>Attivazione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Troubleshoot</source>
        <translation>Risoluzione Problemi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Recovery</source>
        <translation>Recupero</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Projecting to This PC</source>
        <translation>Proietta su Questo PC</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Remote Desktop</source>
        <translation>Desktop Remoto</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Clipboard</source>
        <translation>Appunti</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>About</source>
        <translation>Informazioni Sistema</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Optional Features</source>
        <translation>Funzionalità Facoltative</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>For Developers</source>
        <translation>Per Sviluppatori</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Bluetooth &amp; Devices</source>
        <translation>Bluetooth e Dispositiv</translation>
    </message>
    <message>
        <location line="-8"/>
        <source>Devices</source>
        <translation>Dispositivi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Printers &amp; Scanners</source>
        <translation>Stampanti e Scanner</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mobile Devices</source>
        <translation>Dispositivi Mobili</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Cameras</source>
        <translation>Camere</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Mouse</source>
        <translation>Mouse</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Touchpad</source>
        <translation>Touchpad</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Pen &amp; Windows Ink</source>
        <translation>Penne e Windows Ink</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>AutoPlay</source>
        <translation>Riproduzione Automatica</translation>
    </message>
    <message>
        <location line="+3"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Network &amp; Internet</source>
        <translation>Rete e Internet</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Wi-Fi</source>
        <translation>Wi-Fi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ethernet</source>
        <translation>Ethernet</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Mobile Hotspot</source>
        <translation>Hotspot Mobile</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Airplane Mode</source>
        <translation>Modalità Aereo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Proxy</source>
        <translation>Proxy</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dial-up</source>
        <translation>Accesso remoto</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced Network Settings</source>
        <translation>Impostazioni di Rete Avanzate</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Background</source>
        <translation>Sfondo</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Personalization</source>
        <translation>Personalizzazione</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Colors</source>
        <translation>Colori</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Themes</source>
        <translation>Temi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lock Screen</source>
        <translation>Schermata di Blocco</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Touch Keyboard</source>
        <translation>Tastiera Touch</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Start</source>
        <translation>Avvio</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Taskbar</source>
        <translation>Taskbar</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fonts</source>
        <translation>Font</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Dynamic Lighting</source>
        <translation>Illuminazione Dinamica</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Installed Apps</source>
        <translation>App Installate</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Apps</source>
        <translation>Applicazioni</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Default Apps</source>
        <translation>App Predefinite</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Offline Maps</source>
        <translation>Mappe Offline</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Apps for Websites</source>
        <translation>App per Siti Web</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Video Playback</source>
        <translation>Riproduzione Video</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Startup Apps</source>
        <translation>App di Avvio</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Your Info</source>
        <translation>Tue Informazioni</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Accounts</source>
        <translation>Account</translation>
    </message>
    <message>
        <location line="-4"/>
        <source>Email &amp; Accounts</source>
        <translation>E-mail ed Account</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Sign-in Options</source>
        <translation>Opzioni di Accesso</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Access Work or School</source>
        <translation>Accesso Professionale o Scolastico</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Family &amp; Other Users</source>
        <translation>Famiglia ed Altri Utenti</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Windows Backup</source>
        <translation>Backup Windows</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Date &amp; Time</source>
        <translation>Data e Ora</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Time &amp; Language</source>
        <translation>Ora e Lingua</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Language &amp; Region</source>
        <translation>Lingua e Regione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Typing</source>
        <translation>Inserimento</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Speech</source>
        <translation>Voce</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Game Bar</source>
        <translation>Game Bar</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Gaming</source>
        <translation>Giochi</translation>
    </message>
    <message>
        <location line="-1"/>
        <source>Captures</source>
        <translation>Registrazione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Game Mode</source>
        <translation>Modalità Gioco</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Text Size</source>
        <translation>Dimensione Testo</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Accessibility</source>
        <translation>Accessibilità</translation>
    </message>
    <message>
        <location line="-9"/>
        <source>Visual Effects</source>
        <translation>Effeti Visivi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Magnifier</source>
        <translation>Lente d’Ingrandimento</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Color Filters</source>
        <translation>Filtri Colore</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Contrast Themes</source>
        <translation>Temi ad Alto Contrasto</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Narrator</source>
        <translation>Narratore</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Accessibility Audio</source>
        <translation>Audio (accessibilità)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Captions</source>
        <translation>Sottotitoli</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Accessibility Keyboard</source>
        <translation>Tastiera (accessibilità)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Accessibility Mouse</source>
        <translation>Mouse (accessibilità)</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Eye Control</source>
        <translation>Controlli Oculare</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Windows Security</source>
        <translation>Sicurezza Windows</translation>
    </message>
    <message>
        <location line="+0"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Privacy &amp; Security</source>
        <translation>Privacy e Sicurezza</translation>
    </message>
    <message>
        <location line="-7"/>
        <source>Find My Device</source>
        <translation>Trova il mio Dispositivo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Privacy</source>
        <translation>Privacy</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Location</source>
        <translation>Posizione</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Camera Access</source>
        <translation>Accesso Camera</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Microphone Access</source>
        <translation>Accesso Microfono</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Activity History</source>
        <translation>Cronologia Attività</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Diagnostics &amp; Feedback</source>
        <translation>Diagnostica e Feedback</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Search Permissions</source>
        <translation>Autorizzazioni di Ricerca</translation>
    </message>
    <message>
        <location line="+2"/>
        <location line="+1"/>
        <location line="+1"/>
        <location line="+1"/>
        <source>Windows Update</source>
        <translation>Windows Update</translation>
    </message>
    <message>
        <location line="-2"/>
        <source>Update History</source>
        <translation>Cronologia Aggiornamenti</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Advanced Update Options</source>
        <translation>Impostazioni di Aggiornamento Avanzate</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Windows Insider Program</source>
        <translation>Programma Windows Insider</translation>
    </message>
</context>
<context>
    <name>WinSettingsPageRootItem</name>
    <message>
        <location line="+37"/>
        <source>System Settings</source>
        <translation>Impostazioni di Sistema</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Settings</source>
        <translation>Impostazioni</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Name</source>
        <translation>Nome</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Category</source>
        <translation>Categoria</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Open %1 Settings</source>
        <translation>Apri Impostazioni %1</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy URL</source>
        <translation>Copia URL</translation>
    </message>
</context>
<context>
    <name>WinSettingsRootProvider</name>
    <message>
        <location line="+13"/>
        <source>Windows Settings</source>
        <translation>Impostazioni Windows</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Pages of the Windows Settings app.</source>
        <translation>Pagine dell’App Impostazioni di Windows.</translation>
    </message>
</context>
<context>
    <name>WindowManagementExtension</name>
    <message>
        <location filename="../src/builtins/wm/wm-extension.cpp" line="+56"/>
        <source>Window Management</source>
        <translation>Gestione Finestre</translation>
    </message>
</context>
<context>
    <name>WindowsAppDatabase</name>
    <message>
        <location filename="../src/services/app-service/windows/win-app-database.cpp" line="+1107"/>
        <source>File Explorer</source>
        <translation>Esplora Risorse</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Terminal</source>
        <translation>Terminale</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Command Prompt</source>
        <translation>Prompt dei Comandi</translation>
    </message>
</context>
<context>
    <name>WindowsApplication</name>
    <message>
        <location filename="../src/services/app-service/windows/win-app.hpp" line="+71"/>
        <source>%1: Run as Administrator</source>
        <translation>%1: Esegui come Amministratore</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Run as Administrator</source>
        <translation>Esegui come Amministratore</translation>
    </message>
</context>
<context>
    <name>WindowsGlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/windows-global-shortcut-backend.cpp" line="+302"/>
        <source>unsupported or invalid trigger</source>
        <translation>Trigger non valido o non supportato</translation>
    </message>
</context>
<context>
    <name>WindowsUpdateInstaller</name>
    <message>
        <location filename="../src/services/update/windows-update-installer.cpp" line="+184"/>
        <source>This installation cannot update itself</source>
        <translation type="unfinished">Questa installazione non può aggiornarsi da sola.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>The update is not signed</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Update signature verification failed (0x%1)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Update is signed by %1, expected %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Verifying update…</source>
        <translation type="unfinished">Verifica aggiornamento…</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Update has no version information</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Update version mismatch: expected %1, found %2</source>
        <translation type="unfinished">Conflitto di versioni per l’aggiornamento: atteso %1, trovato %2</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Starting installer…</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+8"/>
        <source>Failed to start the installer</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>X11GlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/x11-global-shortcut-backend.cpp" line="+147"/>
        <source>This shortcut is already in use by another application</source>
        <translation>Questa scorciatoia è già in uso da un’altra applcazione</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Modifier-only shortcuts are not supported</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Unsupported trigger key</source>
        <translation>Tasto d’avvio non supportato</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Trigger key is not present on this keyboard</source>
        <translation>Il tasto d’avvio non è presente su questa tastiera</translation>
    </message>
</context>
<context>
    <name>X11Workspace</name>
    <message>
        <location filename="../src/services/window-manager/x11/x11-window-manager.cpp" line="+424"/>
        <source>Desktop %1</source>
        <translation>Scrivania %1</translation>
    </message>
</context>
<context>
    <name>XdpFileChooser</name>
    <message>
        <location filename="../src/services/file-chooser/xdp-file-chooser/xdp-file-chooser.cpp" line="+39"/>
        <source>Open Directory</source>
        <translation>Apri Cartella</translation>
    </message>
    <message>
        <location line="+0"/>
        <source>Open File</source>
        <translation>Apri File</translation>
    </message>
</context>
<context>
    <name>XxHotkeyGlobalShortcutBackend</name>
    <message>
        <location filename="../src/services/global-shortcuts/xx-hotkey-global-shortcut-backend.cpp" line="+108"/>
        <source>Unsupported trigger key</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Compositor does not support global hotkeys</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+9"/>
        <source>Hotkey binding was lost</source>
        <translation type="unfinished">La scorciatoia da tastiera è andata persa</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Compositor denied the bind. Try another key combination.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>browser-extension</name>
    <message>
        <location filename="../src/builtins/browser/browser-extension.cpp" line="-58"/>
        <source>No browser connected</source>
        <translation>Nessun browser connesso</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>You need to connect at least one browser to vicinae using the browser extension in order to use this command.</source>
        <translation>Devi connettere almeno un browser usando l’estensione per il browser di Vicinae per usare questo comando.</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Open documentation</source>
        <translation>Apri documentazione</translation>
    </message>
</context>
<context>
    <name>clipboard-history-view-host</name>
    <message>
        <location filename="../src/builtins/clipboard/history/clipboard-history-view-host.cpp" line="-216"/>
        <source>Text</source>
        <translation>Testo</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Link</source>
        <translation>Collegamento</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Image</source>
        <translation>Immagine</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>File</source>
        <translation>File</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Unknown</source>
        <translation>Sconosciuto</translation>
    </message>
</context>
<context>
    <name>emoji-categories</name>
    <message>
        <location filename="../src/builtins/vicinae/emoji-grid-model.cpp" line="-52"/>
        <source>Smileys &amp; Emotion</source>
        <translation>Smileys ed Emoticon</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>People &amp; Body</source>
        <translation>Persone e Corpo</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Animals &amp; Nature</source>
        <translation>Animali e Natura</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Food &amp; Drink</source>
        <translation>Cibo e Bevande</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Travel &amp; Places</source>
        <translation>Viaggio e Luoghi</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Activities</source>
        <translation>Attività</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Objects</source>
        <translation>Oggetti</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Symbols</source>
        <translation>Simboli</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Flags</source>
        <translation>Bandiere</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Math</source>
        <translation>Matematica</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Arrows</source>
        <translation>Frecce</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Currency</source>
        <translation>Valute</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Punctuation</source>
        <translation>Punteggiatura</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Shapes</source>
        <translation>Formes</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Misc Symbols</source>
        <translation>Simboli vari</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Greek</source>
        <translation>Greco</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Number Forms</source>
        <translation>Forme Numeriche</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Fancy Letters</source>
        <translation>Lettere Stilizzate</translation>
    </message>
</context>
<context>
    <name>emoji-grid-model</name>
    <message>
        <location line="+131"/>
        <source>Copy</source>
        <translation>Copia</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy name</source>
        <translation>Copia Nome</translation>
    </message>
    <message>
        <location line="+4"/>
        <source>Copy unicode codepoint</source>
        <translation>Copia codepoint Unicode</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy category</source>
        <translation>Copia categoria</translation>
    </message>
    <message>
        <location line="+40"/>
        <source>Skin tones</source>
        <translation>Colori della pelle</translation>
    </message>
</context>
<context>
    <name>file-list-item</name>
    <message>
        <location filename="../src/utils/file-list-item.hpp" line="+100"/>
        <source>Copy file</source>
        <translation>Copia file</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy file path</source>
        <translation>Copia percorso file</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Copy file name</source>
        <translation>Copai nome file</translation>
    </message>
    <message>
        <location line="+20"/>
        <source>Copy mime type</source>
        <translation>Copia tipo MIME</translation>
    </message>
</context>
<context>
    <name>font-categories</name>
    <message>
        <location filename="../src/services/font-service/font-service.cpp" line="+142"/>
        <source>Latin</source>
        <translation>Latino</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Cyrillic</source>
        <translation>Cirillico</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Greek</source>
        <translation>Greco</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Monospace</source>
        <translation>Monospaziato</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Emoji</source>
        <translation>Emoji</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Japanese</source>
        <translation>Giapponese</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Korean</source>
        <translation>Coreano</translation>
    </message>
    <message>
        <location line="+3"/>
        <source>Simplified Chinese</source>
        <translation>Cinese Semplificato</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Traditional Chinese</source>
        <translation>Cinese Tradizionale</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Arabic</source>
        <translation>Arabo</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Hebrew</source>
        <translation>Ebraico</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Thai</source>
        <translation>Thai</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Lao</source>
        <translation>Lao</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Devanagari</source>
        <translation>Devanagari</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Bengali</source>
        <translation>Bengali</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Gurmukhi</source>
        <translation>Gurmukhi</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Gujarati</source>
        <translation>Gujarati</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Tamil</source>
        <translation>Tamil</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Telugu</source>
        <translation>Telugu</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Kannada</source>
        <translation>Kannada</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Malayalam</source>
        <translation>Malayalam</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Sinhala</source>
        <translation>Sinhala</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Armenian</source>
        <translation>Armeno</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Georgian</source>
        <translation>Georgiano</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Thaana</source>
        <translation>Thana</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Tibetan</source>
        <translation>Tibetano</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Myanmar</source>
        <translation>Birmano</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Khmer</source>
        <translation>Khmer</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>Syriac</source>
        <translation>Siriano</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Ogham</source>
        <translation>Ogham</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Runic</source>
        <translation>Rune</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>N&apos;Ko</source>
        <translation>N&apos;Ko</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Symbols</source>
        <translation>Simboli</translation>
    </message>
</context>
<context>
    <name>font-grid-model</name>
    <message>
        <location filename="../src/builtins/font/font-grid-model.cpp" line="+26"/>
        <source>Copy font family</source>
        <translation>Copia Famiglia di Font</translation>
    </message>
</context>
<context>
    <name>keybind-manager</name>
    <message>
        <location filename="../src/internal/keyboard/keybind-manager.cpp" line="+9"/>
        <source>Toggle action panel</source>
        <translation>Mostra/Nascondi pannello azioni</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Toggle the action panel to access and filter through the list of available actions for the currently selected item</source>
        <translation>Mostra/Nascondi il pannello delle azioni e filtra la lista delle azioni disponibili per l’elemento selezionaot</translation>
    </message>
    <message>
        <location line="+10"/>
        <source>Open Search Filter</source>
        <translation>Mostra Filtri di Ricerca</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open the search filter selector if present</source>
        <translation>Mostra la scelta di filtri di ricerca se disponibili</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Open settings window</source>
        <translation>Apri la finestra delle impostazioni</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Open this settings window from the launcher window</source>
        <translation>Apre questa finestra partendo dalla finestra del launcher</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Open Action</source>
        <translation>Azione d’Apertura Generica</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can open the selected item</source>
        <translation>Può essere usata dalle azioni che possono aprire l’elemento selezionato</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Copy Action</source>
        <translation>Azione di Copia Generica</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can copy the selected item</source>
        <translation>Può essere usata dalle azioni che possono copiare l’elemento selezionato</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy Name Action</source>
        <translation>Azione Copia Nome</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can copy the name of the selected item</source>
        <translation>Può essere usata dalle azioni che possono copiare il nome dell’elemento selezionato</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Copy Path Action</source>
        <translation>Azione Copia Percorso</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can copy the path of the selected item</source>
        <translation>Può essere usata dalle azioni che possono copiare il percorso dell’elemento selezionato</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Save Action</source>
        <translation>Azione Salva</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can save the selected item</source>
        <translation>Può essere usata dalle azioni che possono salvare l’elemento selezionato</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Duplicate Action</source>
        <translation>Azione Duplica</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can duplicate the selected item</source>
        <translation>Può essere usata dalle azioni che possono duplicare l’elemento selezionato</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic New Action</source>
        <translation>Azione Crea Generica</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that create something</source>
        <translation>Può essere usata dalle azioni che creano qualcosa</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Move Up Action</source>
        <translation>Azione Generica di Spostamento Verso l’Alto</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can move up the selected item. This does not affect list navigation controls.</source>
        <translation>Può essere usata dalle azioni che spostano in su l’elemento selezionato. Non tocca i controlli per la navigazione della lista.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Move Down Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+21"/>
        <source>Remove Action</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="-20"/>
        <source>Can be used by actions that can move down the selected item. This does not affect list navigation controls.</source>
        <translation>Può essere usata dalle azioni che spostano in giù l’elemento selezionato. Non tocca i controlli per la navigazione della lista.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Refresh Action</source>
        <translation>Azzione Aggiorna Generica</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can refresh the selected item</source>
        <translation>Può essere usata dalle azioni che possono aggiornare l’elemento selezionato</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Generic Pin Action</source>
        <translation>Action d’épinglage générique</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can pin the selected item</source>
        <translation>Può essere usata dalle azioni che possono fissare l’elemento selezionato</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Can be used by actions that can remove the selected item. This is normally used for small, not too impactful removals.</source>
        <translation>Può essere usata dalle azioni che possono rimuovere l’elemento selezionato. Generalmente usata per piccole rimozioni di poco conto.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Dangerous Remove Action</source>
        <translation>Azione Rimuovi Pericolosa</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that perform an impactful removal, generally accompanied by a confirmation dialog.</source>
        <translation>Può essere usata dalle azioni che possono fare rimozioni importanti, genearalmente con una finestra di conferma.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Edit Action</source>
        <translation>Azione Modifica</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can edit the currently selected item</source>
        <translation>Può essere usata dalle azioni che possono modificare l’elemento selezionato.</translation>
    </message>
    <message>
        <location line="+6"/>
        <source>Edit Secondary Action</source>
        <translation>Azione Modifica Secondaria</translation>
    </message>
    <message>
        <location line="+1"/>
        <source>Can be used by actions that can edit a secondary characteristic of the currently selected item</source>
        <translation>Può essere usata dalle azioni che possono modificare una caratteristica secondaria dell’elemento selezionato.</translation>
    </message>
</context>
<context>
    <name>macos-update-installer</name>
    <message>
        <location filename="../src/services/update/macos-update-installer.mm" line="-183"/>
        <source>Update image contains more than one app</source>
        <translation>L’immagine contiene più di un’app</translation>
    </message>
    <message>
        <location line="+7"/>
        <source>Failed to list update image: %1</source>
        <translation>Impossibile elencare l’immagine d’aggiornamento: %1</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>No app found in update image</source>
        <translation>Nessun’app trovata nell’immagine d’aggiornamento</translation>
    </message>
    <message>
        <location line="+12"/>
        <source>Failed to read the update&apos;s code signature</source>
        <translation>Impossibile leggere la firma del codice dell’aggiornamento</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Failed to build the signature requirement</source>
        <translation>Impossibile soddisfare i requisiti di firma</translation>
    </message>
    <message>
        <location line="+11"/>
        <source>Update signature verification failed (%1)</source>
        <translation>Impossibile verificare la firma dell’aggiornamento (%1)</translation>
    </message>
    <message>
        <location line="+15"/>
        <source>Update has no CFBundleShortVersionString</source>
        <translation>L’aggiornamento non ha alcun CFBundleShortVersionString</translation>
    </message>
    <message>
        <location line="+5"/>
        <source>Update version mismatch: expected %1, found %2</source>
        <translation>Conflitto di versioni per l’aggiornamento: atteso %1, trovato %2</translation>
    </message>
</context>
<context>
    <name>media-extension</name>
    <message>
        <location filename="../src/builtins/media/media-extension.hpp" line="-200"/>
        <source>%1 — %2</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+35"/>
        <source>No media player is running</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+1"/>
        <source>No media player matches &quot;%1&quot;</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location line="+131"/>
        <source>Volume %1%</source>
        <translation type="unfinished">Volume %1%</translation>
    </message>
</context>
<context>
    <name>shortcut-conflict</name>
    <message>
        <location filename="../src/ui/settings/shortcut-conflict.cpp" line="+10"/>
        <source>Modifier required</source>
        <translation>Modificatore richiesto</translation>
    </message>
    <message>
        <location line="+4"/>
        <location line="+5"/>
        <source>Already bound to &quot;%1&quot;</source>
        <translation>Già associato a &quot;%1&quot;</translation>
    </message>
</context>
<context>
    <name>utils</name>
    <message>
        <location filename="../src/utils/utils.cpp" line="+88"/>
        <source>0 bytes</source>
        <translation>0 byte</translation>
    </message>
    <message>
        <location line="+2"/>
        <source>bytes</source>
        <translation>byte</translation>
    </message>
</context>
<context>
    <name>virtual-desktops</name>
    <message>
        <location filename="../src/services/window-manager/windows/virtual-desktops.cpp" line="+67"/>
        <source>Desktop %1</source>
        <translation>Scrivania %1</translation>
    </message>
</context>
</TS>
