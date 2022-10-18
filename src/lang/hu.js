const locale = {
  /** General */
  category: 'Kategória',
  settings: 'beállítások',
  pause: 'szünet',
  delete: 'törlés',
  save: 'mentés',
  cancel: 'mégse',
  confirm: 'megerősítés',
  edit: 'Szerkesztés',
  createNew: 'Új létrehozása',
  path: 'Útvonal',
  create: 'Létrehozás',
  url: 'URL',
  directory: 'Könyvtár',
  unknown: 'ismeretlen',
  status: 'Állapot',
  all: 'Mind',
  downloading: 'Letöltés',
  seeding: 'Seedelés',
  completed: 'Kész',
  resumed: 'Folytatott',
  paused: 'Szüneteltetve',
  active: 'Aktív',
  inactive: 'Inaktív',
  stalled: 'Elakadt',
  errored: 'Hibás',
  login: 'Bejelentkezés',
  logout: 'Kijelentkezés',
  downloaded: 'Letöltve',
  uploaded: 'Feltöltve',
  upload: 'Feltöltés',
  download: 'Letöltés',
  ETA: 'Várható befejezési idő',
  peers: 'Peerek',
  ratio: 'Arány',
  seeds: 'Seedek',
  tags: 'Cimkék',
  share: 'Megosztás',
  name: 'Név',
  hash: 'Hash',
  magnet: 'Magnet',
  feed: 'feed',
  rule: 'szabály',

  /** Torrent */
  torrent: {
    title: 'cím',
    added: 'hozzáadva',
    availability: 'elérhetőség',
    size: 'méret',
    progress: 'folyamat',
    directory: 'könyvtár',
    downloaded: 'letöltve',
    uploaded: 'feltöltve',
    created: 'létrehozta',
    comments: 'megjegyzések',
    uploadedSession: 'Feltöltött Session',
    torrentTitle: 'Torrent cím'
  },
  /** Navbar */
  navbar: {
    currentSpeed: 'jelenlegi sebesség',
    freeSpace: 'szabad hely',
    topActions: {
      addTorrent: 'torrent hozzáadása',
      resumeSelected: 'kiválasztott torrentek folytatása',
      pauseSelected: 'kiválasztott torrentek szüneteltetése',
      removeSelected: 'kiválasztott torrentek eltávolítása',
      openSettings: 'beállítások megnyitása',
      searchNew: 'új torrent keresése'
    },
    sessionStats: {
      tooltip: 'A qBittorrent legutóbbi újraindítása óta'
    },
    filters: {
      stalled_uploading: 'Elakadt feltöltés',
      stalled_downloading: 'Elakadt letöltés'
    },
    action: {
      altSpeed: 'Alternatív sebesség',
      dark: 'Sötét',
      light: 'Világos'
    }
  },

  /** Modals */
  modals: {
    newFeed: {
      feedName: 'Név',
      url: 'URL'
    },
    newRule: {
      name: 'Név',
      def: {
        mustContain: 'Tartalmaznia kell',
        affectedFeeds: 'Szabály alkalmazása a csatornákra'
      }
    },
    pluginManager: {
      title: 'Plugin kezelő'
    },
    search: {
      title: 'Keresés',
      btnStartSearch: 'Keresés',
      btnStopSearch: 'Állj',
      columnTitle: {
        name: 'Név',
        size: 'Méret',
        seeds: 'Seedek',
        peers: 'Peerek',
        search_engine: 'Oldal',
        action: ''
      }
    },
    settings: {
      tabName: {
        VueTorrent: 'vuetorrent',
        downloads: 'letöltések',
        connection: 'kapcsolat',
        bittorrent: 'bittorrent',
        rss: 'Rss',
        webUI: 'WEB UI',
        tagsAndCategories: 'cimkék és kategóriák'
      },
      pageVueTorrent: {
        tabName: {
          general: 'Álatalános',
          dashboard: 'Írányítópult'
        },
        pageGeneral: {
          tip: 'Ezek a beállítások magára az egyéni WebUI-ra vonatkoznak',
          currentSpeed: 'Aktuális sebesség megjelenítése',
          speedGraph: 'Sebességgrafikon megjelenítése',
          sessionStats: 'Munkamenet statisztika megjelenítése',
          allTimeStats: 'Összesített statisztika megjelenítése',
          freeSpace: 'Szabad hely megjelenítése',
          trackerFilter: 'Tracker szűrő megjelenítése',
          rightDrawer: 'Right Drawer',
          language: 'Nyelv:',
          paginationSize: 'Lapozás mérete:',
          vueTorrentTitle: 'VueTorrent címsor:',
          currentVersion: 'Aktuális Verzió:',
          qbittorrentVersion: 'QBittorrent Verzió:'
        },
        pageDashboard: {
          busyTorrentTip: 'A forgalmas torrenteknél megjelenítendő tulajdonságok',
          completedTorrentTip: 'A befejezett torrenteknél megjelenítendő tulajdonságok'
        }
      },
      pageDownloads: {
        subHeaderWhenAddTorrent: 'Torrent hozzáadásakor',
        whenAddTorrent: {
          createSubFolder: 'Hozzon létre almappát több fájlt tartalmazó torrentekhez',
          donotAutoStart: 'Ne indítsa el automatikusan a letöltést'
        },
        subHeaderPublicSettings: 'Nyilvános beállítások',
        publicSettings: {
          preAllocateDisk: 'Minden fájl helyének lefoglalása előre',
          appendQBExtension: '.!qB kiterjesztés használata befejezetlen fájloknál'
        },
        subHeaderSaveManagement: 'Mentéskezelés',
        saveManagement: {
          autoManagement: 'Automatikus torrentkezelés',
          relocate: 'A kategória megváltozásakor helyezze át a Torrentet',
          defaultSavePath: 'Alapértelmezett mentési útvonal',
          keepIncompleteIn: 'Tartsa bent a hiányos torrenteket:',
          autoEnabled: 'Automatikus futtatás engedélyezve:',
          autorunProgram: 'Automatikus futtatás program',
          supportParamTitle: 'Támogatott paraméterek (kis- és nagybetű különbözik):',
          supportParamN: '%N: Torrent név ',
          supportParamL: '%L: Kategória',
          supportParamG: '%G: Címkék (vesszővel elválasztva)',
          supportParamF: '%F: Tartalom elérési útja (ugyanaz, mint a többfájlos torrent gyökérútvonala)',
          supportParamR: '%R: Gyökér útvonal (első torrent alkönyvtár útvonala)',
          supportParamD: '%D: Mentés útvonala',
          supportParamC: '%C: Fájlok száma',
          supportParamZ: '%Z: Torrent mérete (bájtok)',
          supportParamT: '%T: Jelenlegi tracker',
          supportParamI: '%I: Info hash'
        }
      },
      pageConnection: {
        subHeader: 'Kapcsolati korlátok',
        globalMaxConnection: 'Globális kapcsolatok maximális száma',
        perTorrentMaxConnection: 'Torrentenkénti kapcsolatok maximális száma',
        globalMaxUploadSlots: 'Globális feltöltési szálak maximális száma',
        perTorrentMaxUploadSlots: 'Torrentenkénti feltöltési szálak maximális száma',
        proxySubHeader: 'Proxy kiszolgáló',
        proxyPeerConnections: 'Proxy használata peer kapcsolatokhoz',
        proxyTorrentOnly: 'Csak a torrentekhez használjon proxyt',
        proxyAuth: 'Hitelesítés'
      },
      pageBittorrent: {
        subHeaderPrivacy: 'Magánszféra',
        enableDHT: 'DHT (decentralizált hálózat) engedélyezése, hogy több peert találjon',
        enablePeX: 'Peercsere (PeX) engedélyezése, hogy több peert találjon',
        enableLPD: 'Helyi peerek felkutatásának (LPD) engedélyezése, hogy több peert találjon',
        enableAnonymous: 'Névtelen mód engedélyezése',
        torrentQueue: 'Torrent ütemezés',
        maxActiveDownload: 'Aktív letöltések maximális száma',
        maxActiveUpload: 'Aktív feltöltések maximális száma',
        maxActiveTorrent: 'Aktív torrentek maximális száma',
        excludeSlowTorrent: 'Lassú torrentek figyelmen kívül hagyása ezeknél a korlátoknál',
        downloadRateLimit: 'Letöltési sebesség küszöb KiB/s',
        uploadRateLimit: 'Feltöltési sebesség küszöb KiB/s',
        torrentInactivityTimer: 'Torrent inaktivitási időzítő',
        subHeaderSeedLimits: 'Seed Limit',
        whenRatioReaches: 'Amikor az arányt eléri',
        whenSeedingTimeReaches: 'Amikor a seedidőt eléri'
      },
      pageRss: {
        tabName: {
          general: 'Általános',
          feeds: 'Feeds',
          rules: 'Szabályok'
        },
        pageRules: {
          rules: 'Szabályok',
          btnCreateNew: 'Szabály létrehozása'
        },
        pageFeeds: {
          feeds: 'Csatornák',
          btnCreateNew: 'Csatorna hozzáadása'
        },
        pageGeneral: {
          rssAutoProcessing: 'RSS olvasó',
          rssAutoDownloader: 'Automata RSS torrent letöltő',
          input: {
            enableRssAutoDownload: 'Az RSS torrentek automatikus letöltésének engedélyezése',
            enableRssProcessing: 'RSS csatornák lekérdezésének engedélyezése',
            feedsRefreshInterval: 'Csatornák frissítési időköze',
            feedsMaxArticles: 'Csatornánkénti cikkek maximum száma'
          }
        }
      },
      pageWebUI: {
        useAlternativeWebUI: 'Alternatív WebUI használata',
        filesLocation: 'Fájlok helye',
        webUserInterface: 'Webes felhasználói felület (Távoli elérés)',
        ipAddress: 'IP-cím:',
        port: 'Port',
        authentication: 'Hitelesítés',
        username: 'Felhasználónév',
        password: 'Jelszó',
        maxAttempts: 'Max próbálkozások',
        banDuration: 'Ban időtartama (másodperc)',
        sessionTimeout: 'Munkamenet időtúllépés (másodperc)',
        bypassAuthenticationForClientsOnLocalhost: 'Hitelesítés mellőzése a helyi gépen lévő klienseknél',
        bypassAuthenticationForClientsInWhitelisted: 'Hitelesítés mellőzése a fehérlistára tett IP alhálózatokban lévő klienseknél',
        whiteListExample: 'Példa: 172.17.32.0/24, fdff:ffff:c8::/40'
      },
      pageTagsAndCategories: {
        btnCreateNew: 'Új létrehozása',
        subHeaderTags: 'Elérhető címkék:',
        subHeaderCategories: 'Elérhető kategóriák:'
      }
    },
    shareLimit: {
      input: {
        globalLimit: 'Globális sebességkorlát használata',
        unlimited: 'Korlátlan'
      },
      limitRatio: 'Arány limit',
      titleDuration: 'Időtartam',
      titleRatio: 'Arány'
    },
    newCategory: {
      categoryName: 'Kategórianév',
      Path: 'Útvonal',
      tipOnNoName: 'A kategória neve kötelező',
      tipOnNameTooLong: 'A kategória neve 15 karakternél rövidebb lehet',
      tipOnNoPath: 'Az elérési út kötelező',
      TipOnPathTooLong: 'Az elérési útnak 40 karakternél rövidebbnek kell lennie'
    },
    newTag: {
      createNewTag: 'Új címke létrehozása',
      tagName: 'Címke név'
    },
    detail: {
      title: 'Torrent részletek',
      tabTitleInfo: 'Info',
      tabTitleTrackers: 'Trackerek',
      tabTitlePeers: 'Peerek',
      tabTitleContent: 'Tartalom',
      tabTitleTagsCategories: 'Címkék és kategóriák',
      pageInfo: {
        pieceStates: 'Folyamat',
        torrentTitle: 'Torrent cím',
        hash: 'hash',
        ratio: 'Arány',
        downloadSpeed: 'Letöltési sebsesség',
        uploadSpeed: 'Feltöltési sebesség',
        eta: 'Várható befejezési idő',
        peers: 'Peerek',
        seeds: 'Seedek',
        status: 'Állapot',
        trackers: 'Trackerek',
        createdBy: 'Létrehozta',
        firstLastPiecePriority: 'Első és utolsó szelet letöltése először',
        sequentialDownload: 'Letöltés egymás utáni sorrendben',
        autoTMM: 'Auto TMM',
        shareRatioLimit: 'Megosztási arány limit',
        shareTimeLimit: 'Megosztási idő limit (perc)',
        downloadLimit: 'Letöltési korlát',
        uploadLimit: 'Feltöltési korlát'
      },
      pagePeers: {
        ip: 'IP',
        connection: 'Kapcsolat',
        flags: 'Zászlók',
        client: 'Kliens',
        progress: 'Folyamat',
        downloadSpeed: 'Letöltési sebesség',
        downloaded: 'Letöltve',
        upSpeed: 'Feltöltési sebesség',
        uploaded: 'Feltöltve',
        relevance: 'Relevancia',
        files: 'Fájlok'
      },
      pageTagsAndCategories: {
        subHeaderTag: 'Elérhető címkék:',
        subHeaderCategories: 'Elérhető kategóriák:'
      },
      pageTrackers: {
        url: 'URL',
        status: 'Állapot',
        peers: 'Peerek',
        seeds: 'Seedek',
        leeches: 'Leechek',
        downloaded: 'Letöltve',
        message: 'Üzenet'
      }
    },
    add: {
      title: 'Torrent hozzáadása',
      selectFiles: 'Fájl kiválasztása',
      urlHint: 'Soronként egy link',
      downloadDirectory: 'Letöltési könyvtár',
      starttorrent: 'Torrent indítása',
      skipHashCheck: 'Hash ellenőrzés kihagyása',
      createSubfolder: 'Almappa létrehozása',
      automaticTorrentManagement: 'Automatikus torrentkezelés',
      dropHereForAdd: 'Dobd ide a hozzáadáshoz',
      oneOrMoreFilesInvalidTorrent: 'Egy vagy több fájl nem érvényes torrent'
    },
    changeLocation: {
      title: 'Hely megváltoztatása',
      torrentName: 'Torrent Név'
    },
    rename: {
      title: 'Átnevezés',
      torrentName: 'Torrent Név'
    },
    sort: {
      title: 'Torrentek rendezése',
      reverse: 'Fordított',
      sortBy: {
        availability: 'Elérhetőség',
        category: 'Kategória',
        completed: 'Kész',
        downloaded: 'Letöltés',
        ETA: 'ETA',
        name: 'Név',
        peers: 'Peerek',
        priority: 'Elsőbbség',
        progress: 'Állapot',
        ratio: 'Arány',
        size: 'Méret',
        state: 'State',
        uploaded: 'Feltöltve',
        addedOn: 'Hozzáadva',
        downloadSpeed: 'Letöltési sebesség',
        timeActive: 'Aktív idő',
        uploadSpeed: 'Feltöltési sebesség'
      }
    },
    speedLimit: {
      speedLimit: 'Sebességkorlát'
    },
    delete: {
      check: 'Fájlok törlése is a tárhelyről'
    }
  },

  /** Toast */
  toast: {
    loginSuccess: 'Sikeres bejelentkezés! 🎉',
    loginFailed: 'Bejelentkezés sikertelen 😕',
    settingsSaved: 'A beállítások sikeresen elmentve!',
    categorySaved: 'A kategória szerkesztése sikeres volt!',
    feedSaved: 'A hírcsatorna sikeresen mentve!',
    ruleSaved: 'Szabály mentve!'
  },

  /** RightClick **/
  rightClick: {
    resume: 'folytatás',
    forceResume: 'folytatás kényszerítése',
    advanced: {
      advanced: 'Speciális beállítások',
      changeLocation: 'Hely megadása',
      rename: 'Átnevezés',
      forceRecheck: 'Kényszerített újraellenőrzés',
      forceReannounce: 'Kényszerített újrajelentés',
      sequentialDownload: 'Letöltés egymás utáni sorrendben',
      firstLastPriority: 'Első és utolsó szelet letöltése először',
      automaticTorrentManagement: 'Automatikus torrentkezelés'
    },
    prio: {
      prio: 'prioritás beállítása',
      top: 'tetejére',
      bottom: 'aljára',
      increase: 'növekvő',
      decrease: 'csökkenő'
    },
    category: 'kategória beállítása',
    limit: 'limit beállítása',
    copy: 'másol',
    info: 'info mutatása'
  }
}

export default locale
