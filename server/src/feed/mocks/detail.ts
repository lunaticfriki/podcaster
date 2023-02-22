import { DetailList } from '../detail-types';

export const Detail: DetailList = {
  data: [
    {
      id: '1535809341',
      type: 'podcasts',
      href: '/v1/catalog/us/podcasts/1535809341?l=en-US',
      attributes: {
        offers: [
          {
            kind: 'get',
            type: 'STDQ'
          }
        ],
        copyright: '© All rights reserved',
        availableEpisodeCount: 349,
        genreNames: ['Music', 'Podcasts'],
        releaseFrequency: 'Updated Semiweekly',
        kind: 'episodic',
        seasonNumbers: [],
        description: {
          standard:
            'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.'
        },
        completed: false,
        artwork: {
          width: 1400,
          height: 1400,
          url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/{w}x{h}bb.{f}',
          bgColor: '1a1a1a',
          textColor1: 'fdfeff',
          textColor2: 'ffedee',
          textColor3: 'cfd0d1',
          textColor4: 'd1c2c3'
        },
        image: [
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/55x55bb.png',
            attributes: {
              height: '55'
            }
          },
          {
            label:
              'https://is3-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/60x60bb.png',
            attributes: {
              height: '60'
            }
          },
          {
            label:
              'https://is1-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/170x170bb.png',
            attributes: {
              height: '170'
            }
          }
        ],
        languageTag: 'en-US',
        url: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341',
        userRating: {
          value: 4.5,
          ratingCount: 7629,
          ratingCountList: [739, 104, 117, 178, 6491],
          ariaLabelForRatings: '4.5 stars'
        },
        releaseDateTime: '2022-12-17T08:00:00Z',
        trackCount: 349,
        displayType: 'free',
        createdDate: '2020-10-14',
        websiteUrl: 'https://www.youtube.com/c/joebuddentv/videos',
        name: 'The Joe Budden Podcast',
        artistName: 'The Joe Budden Network',
        contentRating: 'explicit',
        subscribable: true,
        subscriptionUrl:
          'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1535809341'
      },
      relationships: {
        genres: {
          href: '/v1/catalog/us/podcasts/1535809341/genres?l=en-US',
          data: [
            {
              id: '1310',
              type: 'genres',
              href: '/v1/catalog/us/genres/1310?l=en-US',
              attributes: {
                parentName: 'Podcasts',
                name: 'Music',
                parentId: '26',
                url: 'https://itunes.apple.com/us/genre/id1310'
              }
            }
          ]
        },
        channel: {
          href: '/v1/catalog/us/podcasts/1535809341/channel?l=en-US',
          data: [
            {
              id: '6442483531',
              type: 'podcast-channels',
              href: '/v1/catalog/us/podcast-channels/6442483531?l=en-US',
              attributes: {
                seller: 'Joe Budden Network',
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                releaseFrequency: 'Updated Semiweekly',
                description: {
                  standard:
                    'All content from the Joe Budden Network. Including, The Joe Budden Podcast, "See, The Thing Is...", Girl I Guess and MORE! '
                },
                backgroundSwatch: 'ffffff',
                upsell: [
                  {
                    joinText: "Welcome to the JBN, you're only one click away!",
                    benefitsText: 'Listen Ad-free',
                    kind: 'subscription'
                  }
                ],
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is1-ssl.mzstatic.com/image/thumb/PodcastSource112/v4/de/7e/90/de7e9018-9b8f-bba0-1cd7-3a8bc8c8dd02/bc1dc517-2a96-4994-9914-c8c36c389abc.jpg/{w}x{h}bb.{f}',
                  bgColor: 'ffffff',
                  textColor1: '0f0d0e',
                  textColor2: '272627',
                  textColor3: '3f3e3e',
                  textColor4: '525152'
                },
                url: 'https://podcasts.apple.com/us/channel/the-joe-budden-network/id6442483531',
                showCount: 2,
                displayType: 'free',
                websiteUrl: '',
                name: 'The Joe Budden Network',
                logoArtwork: {
                  width: 3000,
                  height: 750,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/PodcastSource122/v4/a3/bd/d5/a3bdd55a-bee1-1930-d94b-02bcce94c10a/4f6f4baf-05b4-4e28-ab6c-93f7e2634bd7.png/{w}x{h}{c}.{f}',
                  bgColor: '000000',
                  textColor1: 'f2f2f2',
                  textColor2: 'e5e5e5',
                  textColor3: 'c1c1c1',
                  textColor4: 'b7b7b7'
                }
              }
            }
          ]
        },
        artists: {
          href: '/v1/catalog/us/podcasts/1535809341/artists?l=en-US',
          data: [
            {
              id: '1535844019',
              type: 'artists',
              href: '/v1/catalog/us/artists/1535844019?l=en-US',
              attributes: {
                genreNames: [],
                editorialArtwork: {},
                name: 'The Joe Budden Network',
                mediaType: 'Podcasts',
                url: 'https://podcasts.apple.com/us/artist/the-joe-budden-network/1535844019'
              }
            }
          ]
        },
        episodes: {
          href: '/v1/catalog/us/podcasts/1535809341/episodes?l=en-US',
          next: '/v1/catalog/us/podcasts/1535809341/episodes?l=en-US&offset=6',
          data: [
            {
              id: '1000590466737',
              type: 'podcast-episodes',
              href: '/v1/catalog/us/podcast-episodes/1000590466737?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: 'All rights reserved',
                contentAdvisory: '',
                genreNames: ['Music'],
                topics: [
                  {
                    relevance: 0.872096598148346,
                    name: 'Entertainment',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Entertainment',
                    wikiQid: 'Q173799'
                  },
                  {
                    relevance: 0.8703018426895142,
                    name: 'Celebrities',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Celebrity',
                    wikiQid: 'Q211236'
                  },
                  {
                    relevance: 0.7603352665901184,
                    name: 'So Sick',
                    wikiUrl: 'https://en.wikipedia.org/wiki/So_Sick',
                    wikiQid: 'Q2725862'
                  },
                  {
                    relevance: 0.7260648608207703,
                    name: 'Sports',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Sport',
                    wikiQid: 'Q1457982'
                  },
                  {
                    relevance: 0.608277440071106,
                    name: 'Organ system',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Organ_system',
                    wikiQid: 'Q188193'
                  },
                  {
                    relevance: 0.5884231925010681,
                    name: 'Media format',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=7613534',
                    wikiQid: ''
                  },
                  {
                    relevance: 0.5787836313247681,
                    name: 'Sports leagues',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Sports_league',
                    wikiQid: 'Q7464699'
                  },
                  {
                    relevance: 0.571906566619873,
                    name: 'Dutch American',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=38268538',
                    wikiQid: 'Q8393285'
                  },
                  {
                    relevance: 0.5607289671897888,
                    name: 'American music',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=700350',
                    wikiQid: 'Q7033313'
                  },
                  {
                    relevance: 0.5511256456375122,
                    name: 'World Wide Web',
                    wikiUrl: 'https://en.wikipedia.org/wiki/World_Wide_Web',
                    wikiQid: 'Q466'
                  },
                  {
                    relevance: 0.37980639934539795,
                    name: 'Hip Hop',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Hip_hop_music',
                    wikiQid: 'Q11401'
                  },
                  {
                    relevance: 0.2735859751701355,
                    name: 'Justin Herbert',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Justin_Herbert',
                    wikiQid: 'Q27734163'
                  },
                  {
                    relevance: 0.2538791000843048,
                    name: 'The Joe Budden Podcast',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/The_Joe_Budden_Podcast',
                    wikiQid: 'Q65090946'
                  },
                  {
                    relevance: 0.14689026772975922,
                    name: 'Keenan Allen',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Keenan_Allen',
                    wikiQid: 'Q6382866'
                  },
                  {
                    relevance: 0.13034436106681824,
                    name: 'Tory Lanez',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Tory_Lanez',
                    wikiQid: 'Q18353558'
                  },
                  {
                    relevance: 0.12552852928638458,
                    name: 'Jacquees',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Jacquees',
                    wikiQid: 'Q18921961'
                  },
                  {
                    relevance: 0.12299362570047379,
                    name: 'Stephen Curry',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Stephen_Curry_(basketball)',
                    wikiQid: 'Q352159'
                  },
                  {
                    relevance: 0.09575231373310089,
                    name: 'Daddy Yankee',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Daddy_Yankee',
                    wikiQid: 'Q272591'
                  },
                  {
                    relevance: 0.09116830676794052,
                    name: 'Jennifer Lopez',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Jennifer_Lopez',
                    wikiQid: 'Q40715'
                  },
                  {
                    relevance: 0.06340967118740082,
                    name: 'Joe Biden',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Joe_Biden',
                    wikiQid: 'Q6279'
                  }
                ],
                kind: 'full',
                mediaKind: 'audio',
                description: {
                  standard:
                    'The Meg and Tory case continues on as the guys react to the latest trial news after Kelsey takes the stand (19:57). Gunna is released from jail after pleading guilty to a state RICO charge (49:50), and speculation spreads on whether the Atlanta rapper snitched or not (52:07). Joe sends his condolences to the family and friends of Stephen ‘tWitch’ Boss (1:20:00). Dr. Umar shares his thoughts about Wakanda Forever (1:25:17) and Elon Musk has suspended more accounts on Twitter (1:31:35). GloRilla is looking for a personal assistant (1:35:00), the NBA reveals its new trophies and awards (1:46:43), new music (2:12:36), + MORE!\n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden',
                  short:
                    'The Meg and Tory case continues on as the guys react to the latest trial news after Kelsey takes the stand (19:57). Gunna is released from jail after pleading guilty to a state RICO charge (49:50), and speculation spreads on whether the Atlanta rapper..'
                },
                artwork: {
                  width: 1400,
                  height: 1400,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/{w}x{h}bb.{f}',
                  bgColor: '1a1a1a',
                  textColor1: 'fdfeff',
                  textColor2: 'ffedee',
                  textColor3: 'cfd0d1',
                  textColor4: 'd1c2c3'
                },
                url: 'https://podcasts.apple.com/us/podcast/episode-587-so-sick/id1535809341?i=1000590466737',
                releaseDateTime: '2022-12-17T08:00:00Z',
                websiteUrl: 'https://www.youtube.com/c/joebuddentv/videos',
                durationInMilliseconds: 9565000,
                name: 'Episode 587 | "So Sick"',
                guid: '06ead79e-350f-4421-8044-1153365f9a38',
                artistName: 'The Joe Budden Network',
                contentRating: 'explicit',
                subscribable: true,
                assetUrl:
                  'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_587.mp3?dest-id=2422538'
              }
            },
            {
              id: '1000590133523',
              type: 'podcast-episodes',
              href: '/v1/catalog/us/podcast-episodes/1000590133523?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: 'All rights reserved',
                contentAdvisory: '',
                genreNames: ['Music'],
                kind: 'full',
                topics: [
                  {
                    relevance: 0.9122625589370728,
                    name: 'Entertainment',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Entertainment',
                    wikiQid: 'Q173799'
                  },
                  {
                    relevance: 0.8261797428131104,
                    name: 'Celebrities',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Celebrity',
                    wikiQid: 'Q211236'
                  },
                  {
                    relevance: 0.7023481130599976,
                    name: 'Podcasts',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Podcast',
                    wikiQid: 'Q20899'
                  },
                  {
                    relevance: 0.5933796167373657,
                    name: 'Digital technology',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=2150811',
                    wikiQid: 'Q5330608'
                  },
                  {
                    relevance: 0.5525593757629395,
                    name: 'Viral Videos',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Viral_video',
                    wikiQid: 'Q1030329'
                  },
                  {
                    relevance: 0.5457634925842285,
                    name: 'Hip Hop',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Hip_hop_music',
                    wikiQid: 'Q11401'
                  },
                  {
                    relevance: 0.5146762728691101,
                    name: 'The Joe Budden Podcast',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/The_Joe_Budden_Podcast',
                    wikiQid: 'Q65090946'
                  },
                  {
                    relevance: 0.37172120809555054,
                    name: 'Joe Rogan',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Joe_Rogan',
                    wikiQid: 'Q2718421'
                  },
                  {
                    relevance: 0.3317394554615021,
                    name: 'Kylie Jenner',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kylie_Jenner',
                    wikiQid: 'Q1770624'
                  },
                  {
                    relevance: 0.3148132860660553,
                    name: 'Akademiks',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Akademiks',
                    wikiQid: 'Q263445'
                  },
                  {
                    relevance: 0.2586093842983246,
                    name: 'Meek Mill',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Meek_Mill',
                    wikiQid: 'Q1897911'
                  },
                  {
                    relevance: 0.1874174326658249,
                    name: 'Tory Lanez',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Tory_Lanez',
                    wikiQid: 'Q18353558'
                  },
                  {
                    relevance: 0.12026643753051758,
                    name: 'Jay Leno',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Jay_Leno',
                    wikiQid: 'Q218718'
                  },
                  {
                    relevance: 0.07613323628902435,
                    name: 'Shannon Sharpe',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Shannon_Sharpe',
                    wikiQid: 'Q1378223'
                  },
                  {
                    relevance: 0.06737948954105377,
                    name: 'Patrick Mahomes',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Patrick_Mahomes',
                    wikiQid: 'Q19667998'
                  },
                  {
                    relevance: 0.0663192868232727,
                    name: 'Angie Martinez',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Angie_Martinez',
                    wikiQid: 'Q438271'
                  },
                  {
                    relevance: 0.06290960311889648,
                    name: 'Kanye West',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kanye_West',
                    wikiQid: 'Q15935'
                  },
                  {
                    relevance: 0.049010492861270905,
                    name: 'Stalley',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Stalley',
                    wikiQid: 'Q5924554'
                  }
                ],
                mediaKind: 'audio',
                description: {
                  standard:
                    'In this episode, Joe and the guys begin by extending their thoughts to a few legends we lost this week (16:42). Akademiks joins the pod to discuss his current beefs & feud with Yung Miami (30:30). The Megan thee Stallion & Tory Lanez trial is underway as everyone shares their thoughts about the case and the potential ramifications for either party (42:00). Akademiks shares his pocket watching list for other content creators (1:27:00), the collective debates who is more prominent between Rogan & The Breakfast Club (1:46:44), revisiting Akademiks “I’m the prize” viral video (1:59:40), why he and Meek Mill had beef (2:16:43), Part of the Show (2:25:40), + MORE! \n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n Joe | DESTIN CONRAD - “NOBODY KNOWS”\n Ice | West Philly Freck - “Carbon Monoxide”\n Parks | Stalley - “RED LIGHT”\n Ish | Honey - “Trouble”',
                  short:
                    'In this episode, Joe and the guys begin by extending their thoughts to a few legends we lost this week (16:42). Akademiks joins the pod to discuss his current beefs & feud with Yung Miami (30:30). The Megan thee Stallion & Tory Lanez trial is...'
                },
                artwork: {
                  width: 1400,
                  height: 1400,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/{w}x{h}bb.{f}',
                  bgColor: '1a1a1a',
                  textColor1: 'fdfeff',
                  textColor2: 'ffedee',
                  textColor3: 'cfd0d1',
                  textColor4: 'd1c2c3'
                },
                url: 'https://podcasts.apple.com/us/podcast/episode-586-the-side-main-feat-akademiks/id1535809341?i=1000590133523',
                releaseDateTime: '2022-12-14T08:30:00Z',
                websiteUrl: 'https://www.youtube.com/c/joebuddentv/videos',
                durationInMilliseconds: 10039000,
                name: 'Episode 586 | "The Side Main" (feat. Akademiks)',
                guid: 'c3f31bcd-9212-4d8f-bae7-cfcd19bfa03d',
                contentRating: 'explicit',
                artistName: 'The Joe Budden Network',
                subscribable: true,
                assetUrl:
                  'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_586.mp3?dest-id=2422538'
              }
            },
            {
              id: '1000589683360',
              type: 'podcast-episodes',
              href: '/v1/catalog/us/podcast-episodes/1000589683360?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: 'All rights reserved',
                contentAdvisory: '',
                genreNames: ['Music'],
                kind: 'full',
                topics: [
                  {
                    relevance: 0.9845424294471741,
                    name: 'Sports',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Sport',
                    wikiQid: 'Q1457982'
                  },
                  {
                    relevance: 0.9781535267829895,
                    name: 'Gridiron football',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=18951490',
                    wikiQid: 'Q1081491'
                  },
                  {
                    relevance: 0.946445107460022,
                    name: 'Entertainment',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Entertainment',
                    wikiQid: 'Q173799'
                  },
                  {
                    relevance: 0.9095364212989807,
                    name: 'Music',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=18839',
                    wikiQid: 'Q638'
                  },
                  {
                    relevance: 0.8559513688087463,
                    name: 'NFL Football',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/National_Football_League',
                    wikiQid: 'Q1215884'
                  },
                  {
                    relevance: 0.8257746696472168,
                    name: 'Celebrities',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Celebrity',
                    wikiQid: 'Q211236'
                  },
                  {
                    relevance: 0.8053320050239563,
                    name: 'Team sport',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Team_sport',
                    wikiQid: 'Q216048'
                  },
                  {
                    relevance: 0.6652001142501831,
                    name: 'College sports in the United States',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=28272168',
                    wikiQid: 'Q7399890'
                  },
                  {
                    relevance: 0.6438873410224915,
                    name: 'Quarterbacks',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Quarterback',
                    wikiQid: 'Q622747'
                  },
                  {
                    relevance: 0.536148726940155,
                    name: 'Basketball',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Basketball',
                    wikiQid: 'Q5372'
                  },
                  {
                    relevance: 0.5036434531211853,
                    name: 'Dallas Cowboys',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Dallas_Cowboys',
                    wikiQid: 'Q204862'
                  },
                  {
                    relevance: 0.38547930121421814,
                    name: 'The Joe Budden Podcast',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/The_Joe_Budden_Podcast',
                    wikiQid: 'Q65090946'
                  },
                  {
                    relevance: 0.3652656674385071,
                    name: 'Brittney Griner',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Brittney_Griner',
                    wikiQid: 'Q2925780'
                  },
                  {
                    relevance: 0.3308088779449463,
                    name: 'Anti-Semitism',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Antisemitism',
                    wikiQid: 'Q22649'
                  },
                  {
                    relevance: 0.2925637662410736,
                    name: 'Jay-Z',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Jay-Z',
                    wikiQid: 'Q62766'
                  },
                  {
                    relevance: 0.2787624001502991,
                    name: 'Cash Money Records',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Cash_Money_Records',
                    wikiQid: 'Q1047366'
                  },
                  {
                    relevance: 0.26708731055259705,
                    name: 'Hip Hop',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Hip_hop_music',
                    wikiQid: 'Q11401'
                  },
                  {
                    relevance: 0.14536704123020172,
                    name: 'Kawhi Leonard',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kawhi_Leonard',
                    wikiQid: 'Q926248'
                  },
                  {
                    relevance: 0.14076881110668182,
                    name: 'Michael Vick',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Michael_Vick',
                    wikiQid: 'Q505431'
                  },
                  {
                    relevance: 0.1261139065027237,
                    name: 'Derrick Henry',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Derrick_Henry',
                    wikiQid: 'Q16729768'
                  },
                  {
                    relevance: 0.11639317125082016,
                    name: 'Chris Brown',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Chris_Brown',
                    wikiQid: 'Q155700'
                  },
                  {
                    relevance: 0.11414806544780731,
                    name: 'Drake',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Drake_(rapper)',
                    wikiQid: 'Q218812'
                  },
                  {
                    relevance: 0.09977903962135315,
                    name: 'R. Kelly',
                    wikiUrl: 'https://en.wikipedia.org/wiki/R._Kelly',
                    wikiQid: 'Q273055'
                  },
                  {
                    relevance: 0.09411783516407013,
                    name: 'Andrew Luck',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Andrew_Luck',
                    wikiQid: 'Q506098'
                  },
                  {
                    relevance: 0.08481300622224808,
                    name: 'Geno Smith',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Geno_Smith',
                    wikiQid: 'Q59497'
                  },
                  {
                    relevance: 0.08232761919498444,
                    name: 'Kendrick Lamar',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kendrick_Lamar',
                    wikiQid: 'Q130798'
                  },
                  {
                    relevance: 0.07396945357322693,
                    name: 'Ben Roethlisberger',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Ben_Roethlisberger',
                    wikiQid: 'Q537679'
                  },
                  {
                    relevance: 0.07029597461223602,
                    name: 'Michael Jordan',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Michael_Jordan',
                    wikiQid: 'Q41421'
                  },
                  {
                    relevance: 0.06757884472608566,
                    name: 'Britney Spears',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Britney_Spears',
                    wikiQid: 'Q11975'
                  },
                  {
                    relevance: 0.05044599249958992,
                    name: 'DJ Drama',
                    wikiUrl: 'https://en.wikipedia.org/wiki/DJ_Drama',
                    wikiQid: 'Q1154079'
                  },
                  {
                    relevance: 0.04826056957244873,
                    name: 'SZA (singer)',
                    wikiUrl: 'https://en.wikipedia.org/wiki/SZA_(singer)',
                    wikiQid: 'Q16210722'
                  },
                  {
                    relevance: 0.047218162566423416,
                    name: 'Zaire Franklin',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Zaire_Franklin',
                    wikiQid: 'Q52304777'
                  },
                  {
                    relevance: 0.036783408373594284,
                    name: 'Eric Bellinger',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Eric_Bellinger',
                    wikiQid: 'Q20675977'
                  },
                  {
                    relevance: 0.035747919231653214,
                    name: 'Irv Gotti',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Irv_Gotti',
                    wikiQid: 'Q525827'
                  }
                ],
                mediaKind: 'audio',
                description: {
                  standard:
                    'The JBP kicks off Episode 585 with the recent news that Brittney Griner is coming home following a prisoner swap (17:45). Plenty of new music was released on Friday, including SZA (30:48) and A Boogie (1:00:20). Next, Nike files trademark infringement violations against two designers over its Air Jordan 1 and Dunk sneaker styles (1:11:56) & Van Jones apologizes to the Jewish community for Kanye’s antisemitic comments (1:19:00). The guys then address Irv Gotti’s recent statement that Cash Money is the greatest Hip-Hop label of all time (1:34:30). Part of the Show returns (2:02:22), Colts Linebacker Zaire Franklin joins the show (2:09:15), + MORE! \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n Joe | Lucky Daye - “Magic”\n Ice | Icewear Vezzo & DJ Drama (feat. Future) - “Certified”\n Parks | D FLOW - “Curtains To Drapes”\n Ish | Eric Bellinger - “BNB”',
                  short:
                    'The JBP kicks off Episode 585 with the recent news that Brittney Griner is coming home following a prisoner swap (17:45). Plenty of new music was released on Friday, including SZA (30:48) and A Boogie (1:00:20). Next, Nike files trademark infringement..'
                },
                artwork: {
                  width: 1400,
                  height: 1400,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/{w}x{h}bb.{f}',
                  bgColor: '1a1a1a',
                  textColor1: 'fdfeff',
                  textColor2: 'ffedee',
                  textColor3: 'cfd0d1',
                  textColor4: 'd1c2c3'
                },
                url: 'https://podcasts.apple.com/us/podcast/episode-585-per-my-previous-email/id1535809341?i=1000589683360',
                releaseDateTime: '2022-12-10T08:30:00Z',
                websiteUrl: 'https://www.youtube.com/c/joebuddentv/videos',
                durationInMilliseconds: 11001000,
                name: 'Episode 585 | “Per My Previous Email”',
                guid: '86b3c275-2d76-485c-bf71-920b880e4f0c',
                artistName: 'The Joe Budden Network',
                contentRating: 'clean',
                subscribable: true,
                assetUrl:
                  'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_585.mp3?dest-id=2422538'
              }
            },
            {
              id: '1000589175402',
              type: 'podcast-episodes',
              href: '/v1/catalog/us/podcast-episodes/1000589175402?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: 'All rights reserved',
                contentAdvisory: '',
                genreNames: ['Music'],
                kind: 'full',
                topics: [
                  {
                    relevance: 0.9847829937934875,
                    name: 'Sports',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Sport',
                    wikiQid: 'Q1457982'
                  },
                  {
                    relevance: 0.9235356450080872,
                    name: 'NFL Football',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/National_Football_League',
                    wikiQid: 'Q1215884'
                  },
                  {
                    relevance: 0.8992892503738403,
                    name: 'Entertainment',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Entertainment',
                    wikiQid: 'Q173799'
                  },
                  {
                    relevance: 0.8793217539787292,
                    name: 'Celebrities',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Celebrity',
                    wikiQid: 'Q211236'
                  },
                  {
                    relevance: 0.8648863434791565,
                    name: 'Gridiron football',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=23976719',
                    wikiQid: 'Q1546270'
                  },
                  {
                    relevance: 0.8348057866096497,
                    name: 'Professional sports leagues in the United States',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=49468434',
                    wikiQid: 'Q25135303'
                  },
                  {
                    relevance: 0.8082132339477539,
                    name: 'College sports in the United States',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=28272168',
                    wikiQid: 'Q7399890'
                  },
                  {
                    relevance: 0.7267529964447021,
                    name: 'Digital audio',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Digital_audio',
                    wikiQid: 'Q173114'
                  },
                  {
                    relevance: 0.6721625328063965,
                    name: 'Digital media',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Digital_media',
                    wikiQid: 'Q1076968'
                  },
                  {
                    relevance: 0.6251971125602722,
                    name: 'Professional sports',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Professional_sports',
                    wikiQid: 'Q1369650'
                  },
                  {
                    relevance: 0.5665821433067322,
                    name: 'American football leagues',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=697759',
                    wikiQid: 'Q8245848'
                  },
                  {
                    relevance: 0.2895338535308838,
                    name: 'Deion Sanders',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Deion_Sanders',
                    wikiQid: 'Q954184'
                  },
                  {
                    relevance: 0.17675372958183289,
                    name: 'Jay-Z',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Jay-Z',
                    wikiQid: 'Q62766'
                  },
                  {
                    relevance: 0.1746167242527008,
                    name: 'Ab-Soul',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Ab-Soul',
                    wikiQid: 'Q3449364'
                  },
                  {
                    relevance: 0.17396941781044006,
                    name: 'Nick Saban',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Nick_Saban',
                    wikiQid: 'Q70894'
                  },
                  {
                    relevance: 0.1433613896369934,
                    name: 'Drake',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Drake_(rapper)',
                    wikiQid: 'Q218812'
                  },
                  {
                    relevance: 0.12712770700454712,
                    name: 'Kirk Franklin',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kirk_Franklin',
                    wikiQid: 'Q1349627'
                  },
                  {
                    relevance: 0.11334675550460815,
                    name: 'Tom Brady',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Tom_Brady',
                    wikiQid: 'Q313381'
                  },
                  {
                    relevance: 0.09194397181272507,
                    name: 'John Heisman',
                    wikiUrl: 'https://en.wikipedia.org/wiki/John_Heisman',
                    wikiQid: 'Q3303281'
                  },
                  {
                    relevance: 0.07827334105968475,
                    name: 'Scarlett Johansson',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Scarlett_Johansson',
                    wikiQid: 'Q34436'
                  },
                  {
                    relevance: 0.07729268074035645,
                    name: 'DJ Premier',
                    wikiUrl: 'https://en.wikipedia.org/wiki/DJ_Premier',
                    wikiQid: 'Q380639'
                  },
                  {
                    relevance: 0.0737660601735115,
                    name: 'Tim Tebow',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Tim_Tebow',
                    wikiQid: 'Q517467'
                  },
                  {
                    relevance: 0.0693536177277565,
                    name: 'Stephen Curry',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Stephen_Curry_(basketball)',
                    wikiQid: 'Q352159'
                  },
                  {
                    relevance: 0.06542813032865524,
                    name: 'Lawrence Taylor',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Lawrence_Taylor',
                    wikiQid: 'Q963129'
                  },
                  {
                    relevance: 0.039040375500917435,
                    name: 'Gabrielle Union',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Gabrielle_Union',
                    wikiQid: 'Q231648'
                  }
                ],
                mediaKind: 'audio',
                description: {
                  standard:
                    'Joe opens the podcast with a recap of the Rupert Murdoch Documentary on HBO (9:56), followed by reactions to the recent news of Deion Sanders leaving Jackson State to take the head coaching job at Colorado (24:22). Boosie responds to Gabrielle Union’s comments about him from a 2021 interview (53:00), Joe allows Ice and Ish to explain their lack of knowledge with Kirk Franklin’s “Melodies of Heaven” (1:02:20), and Summer Walker is in search of an assistant (1:11:40). Also, Joe reviews his hate list (1:27:00), SZA is dropping an album soon (1:32:30), Part of the Show returns (2:15:41), + MORE!\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n Sleeper Picks:\n Joe | Reggie Becton & Kenyon Dixon - “Rm. 143 (Remix)”\n Ice | Omeretta the Great (feat. Key Glock) - “My Way”\n Parks | Feid & DJ Premier - “Le Pido a DIOS”\n Ish | Amaria (feat. DESTIN CONRAD) - “All For You”',
                  short:
                    'Joe opens the podcast with a recap of the Rupert Murdoch Documentary on HBO (9:56), followed by reactions to the recent news of Deion Sanders leaving Jackson State to take the head coaching job at Colorado (24:22). Boosie responds to Gabrielle...'
                },
                artwork: {
                  width: 1400,
                  height: 1400,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/{w}x{h}bb.{f}',
                  bgColor: '1a1a1a',
                  textColor1: 'fdfeff',
                  textColor2: 'ffedee',
                  textColor3: 'cfd0d1',
                  textColor4: 'd1c2c3'
                },
                url: 'https://podcasts.apple.com/us/podcast/episode-584-you-go/id1535809341?i=1000589175402',
                releaseDateTime: '2022-12-07T08:00:00Z',
                websiteUrl: 'https://www.youtube.com/c/joebuddentv/videos',
                durationInMilliseconds: 10344000,
                name: 'Episode 584 | "You Go"',
                guid: '78eb7aa4-4ac3-4f52-bc06-7126b5040797',
                contentRating: 'clean',
                artistName: 'The Joe Budden Network',
                subscribable: true,
                assetUrl:
                  'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_584.mp3?dest-id=2422538'
              }
            },
            {
              id: '1000588611972',
              type: 'podcast-episodes',
              href: '/v1/catalog/us/podcast-episodes/1000588611972?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: 'All rights reserved',
                contentAdvisory: '',
                genreNames: ['Music'],
                kind: 'full',
                topics: [
                  {
                    relevance: 0.9326672554016113,
                    name: 'Sports',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Sport',
                    wikiQid: 'Q1457982'
                  },
                  {
                    relevance: 0.9014027118682861,
                    name: 'Entertainment',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Entertainment',
                    wikiQid: 'Q173799'
                  },
                  {
                    relevance: 0.8500736355781555,
                    name: 'Celebrities',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Celebrity',
                    wikiQid: 'Q211236'
                  },
                  {
                    relevance: 0.8389190435409546,
                    name: 'Basketball',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Basketball',
                    wikiQid: 'Q5372'
                  },
                  {
                    relevance: 0.747261643409729,
                    name: 'NBA Basketball',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/National_Basketball_Association',
                    wikiQid: 'Q155223'
                  },
                  {
                    relevance: 0.69698166847229,
                    name: 'Digital media',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Digital_media',
                    wikiQid: 'Q1076968'
                  },
                  {
                    relevance: 0.6380800604820251,
                    name: 'Digital audio',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Digital_audio',
                    wikiQid: 'Q173114'
                  },
                  {
                    relevance: 0.6302330493927002,
                    name: 'Chris Paul',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Chris_Paul',
                    wikiQid: 'Q46040'
                  },
                  {
                    relevance: 0.5989184975624084,
                    name: 'American music',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=700350',
                    wikiQid: 'Q7033313'
                  },
                  {
                    relevance: 0.5784379839897156,
                    name: 'Media format',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=7613534',
                    wikiQid: ''
                  },
                  {
                    relevance: 0.5712966918945312,
                    name: 'Participants in American reality television series',
                    wikiUrl: 'https://en.wikipedia.org/wiki/?curid=8258419',
                    wikiQid: 'Q7166110'
                  },
                  {
                    relevance: 0.5582535862922668,
                    name: 'Olympic Games',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Olympic_Games',
                    wikiQid: 'Q5389'
                  },
                  {
                    relevance: 0.3753378093242645,
                    name: 'Kanye West',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kanye_West',
                    wikiQid: 'Q15935'
                  },
                  {
                    relevance: 0.3118738532066345,
                    name: 'Double-double (basketball)',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Double_(basketball)',
                    wikiQid: 'Q1251376'
                  },
                  {
                    relevance: 0.275138258934021,
                    name: 'Joe Biden',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Joe_Biden',
                    wikiQid: 'Q6279'
                  },
                  {
                    relevance: 0.2747495770454407,
                    name: 'LeBron James',
                    wikiUrl: 'https://en.wikipedia.org/wiki/LeBron_James',
                    wikiQid: 'Q36159'
                  },
                  {
                    relevance: 0.2334728091955185,
                    name: 'Kirk Franklin',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kirk_Franklin',
                    wikiQid: 'Q1349627'
                  },
                  {
                    relevance: 0.1796521693468094,
                    name: 'T. J. Holmes',
                    wikiUrl: 'https://en.wikipedia.org/wiki/T._J._Holmes',
                    wikiQid: 'Q7668346'
                  },
                  {
                    relevance: 0.1789112389087677,
                    name: 'Wendy Williams',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Wendy_Williams',
                    wikiQid: 'Q618233'
                  },
                  {
                    relevance: 0.13610616326332092,
                    name: 'Stephen Curry',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Stephen_Curry_(basketball)',
                    wikiQid: 'Q352159'
                  },
                  {
                    relevance: 0.10198619961738586,
                    name: 'Caitlyn Jenner',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Bruce_Jenner',
                    wikiQid: 'Q365144'
                  },
                  {
                    relevance: 0.0827716812491417,
                    name: 'Kris Jenner',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kris_Jenner',
                    wikiQid: 'Q1138235'
                  },
                  {
                    relevance: 0.08168737590312958,
                    name: 'Kim Kardashian',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kim_Kardashian',
                    wikiQid: 'Q186304'
                  },
                  {
                    relevance: 0.07444003969430923,
                    name: 'Tyler, the Creator',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Tyler,_The_Creator',
                    wikiQid: 'Q167635'
                  },
                  {
                    relevance: 0.06473550945520401,
                    name: 'Alex Jones',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Alex_Jones_(radio_host)',
                    wikiQid: 'Q319121'
                  },
                  {
                    relevance: 0.06154922395944595,
                    name: 'Paul McCartney',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Paul_McCartney',
                    wikiQid: 'Q2599'
                  },
                  {
                    relevance: 0.05648365989327431,
                    name: 'The Barbarian (wrestler)',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/The_Barbarian_(wrestler)',
                    wikiQid: 'Q326925'
                  },
                  {
                    relevance: 0.04230645298957825,
                    name: 'Amy Robach',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Amy_Robach',
                    wikiQid: 'Q4395066'
                  }
                ],
                mediaKind: 'audio',
                description: {
                  standard:
                    'The gang picks up where the last episode left off as Joe had no idea people would hate on his triple-double (12:48). Chris Paul gets outed by Kanye West after a Twitter rant (25:45), which followed antisemitic comments earlier in the day on Alex Jones show (29:34). GMA3 news anchors, T.J. Holmes & Amy Robach allegedly had an affair (47:30), new music (1:20:07) and Joe calls his former High School teammate Curtis Small to help convince the guys about his game vs. Oak Hill (1:33:10). Lastly, LeBron James addresses the media (1:48:25), breaking down the movie trailers for Cocaine Bear & Transformers (1:56:09), Alex Hunter is no longer receiving his alimony checks from Wendy Williams (2:09:54), + MORE!\n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n Joe | Shaylin B - “Magic”\n Ice | Desirée - “Nobody Else”\n Parks | Parks (feat. Passport Gift, David Bars, & Rasheed Chappell) - “Thank You”\n Ish | RINI - “Your Eyes”',
                  short:
                    'The gang picks up where the last episode left off as Joe had no idea people would hate on his triple-double (12:48). Chris Paul gets outed by Kanye West after a Twitter rant (25:45), which followed antisemitic comments earlier in the day on Alex Jones..'
                },
                artwork: {
                  width: 1400,
                  height: 1400,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/{w}x{h}bb.{f}',
                  bgColor: '1a1a1a',
                  textColor1: 'fdfeff',
                  textColor2: 'ffedee',
                  textColor3: 'cfd0d1',
                  textColor4: 'd1c2c3'
                },
                url: 'https://podcasts.apple.com/us/podcast/episode-583-the-barbarian-show/id1535809341?i=1000588611972',
                releaseDateTime: '2022-12-03T12:50:50Z',
                websiteUrl: 'https://www.youtube.com/c/joebuddentv/videos',
                durationInMilliseconds: 9939000,
                name: 'Episode 583 |  “The Barbarian Show”',
                guid: 'c60d5a7e-68df-4d6e-a48b-44458f37f7d8',
                artistName: 'The Joe Budden Network',
                contentRating: 'clean',
                subscribable: true,
                assetUrl:
                  'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_583.mp3?dest-id=2422538'
              }
            },
            {
              id: '1000588096078',
              type: 'podcast-episodes',
              href: '/v1/catalog/us/podcast-episodes/1000588096078?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: 'All rights reserved',
                contentAdvisory: '',
                genreNames: ['Music'],
                kind: 'full',
                topics: [
                  {
                    relevance: 0.8905487656593323,
                    name: 'Entertainment',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Entertainment',
                    wikiQid: 'Q173799'
                  },
                  {
                    relevance: 0.8389126062393188,
                    name: 'Basketball',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Basketball',
                    wikiQid: 'Q5372'
                  },
                  {
                    relevance: 0.8290923237800598,
                    name: 'Celebrities',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Celebrity',
                    wikiQid: 'Q211236'
                  },
                  {
                    relevance: 0.7737615704536438,
                    name: 'Sports',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Sport',
                    wikiQid: 'Q1457982'
                  },
                  {
                    relevance: 0.715506374835968,
                    name: 'Podcasts',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Podcast',
                    wikiQid: 'Q20899'
                  },
                  {
                    relevance: 0.6174613237380981,
                    name: 'Double-double (basketball)',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Double_(basketball)',
                    wikiQid: 'Q1251376'
                  },
                  {
                    relevance: 0.5532622933387756,
                    name: 'NBA Basketball',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/National_Basketball_Association',
                    wikiQid: 'Q155223'
                  },
                  {
                    relevance: 0.5148060917854309,
                    name: 'Grammy Awards',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Grammy_Award',
                    wikiQid: 'Q8498199'
                  },
                  {
                    relevance: 0.43054935336112976,
                    name: 'The Joe Budden Podcast',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/The_Joe_Budden_Podcast',
                    wikiQid: 'Q65090946'
                  },
                  {
                    relevance: 0.3635329604148865,
                    name: 'Meek Mill',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Meek_Mill',
                    wikiQid: 'Q1897911'
                  },
                  {
                    relevance: 0.30241164565086365,
                    name: 'Soul Train Music Awards',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Soul_Train_Music_Awards',
                    wikiQid: 'Q959013'
                  },
                  {
                    relevance: 0.28395503759384155,
                    name: 'Michael McDonald (musician)',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Michael_McDonald_(singer)',
                    wikiQid: 'Q282002'
                  },
                  {
                    relevance: 0.18639570474624634,
                    name: 'Lauryn Hill',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Lauryn_Hill',
                    wikiQid: 'Q214226'
                  },
                  {
                    relevance: 0.18519064784049988,
                    name: 'Kenny Loggins',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kenny_Loggins',
                    wikiQid: 'Q435965'
                  },
                  {
                    relevance: 0.1495993584394455,
                    name: 'Sean Taylor',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Sean_Taylor',
                    wikiQid: 'Q720488'
                  },
                  {
                    relevance: 0.1363709568977356,
                    name: 'Rick Ross',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Rick_Ross',
                    wikiQid: 'Q297831'
                  },
                  {
                    relevance: 0.13265548646450043,
                    name: 'Tom Brady',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Tom_Brady',
                    wikiQid: 'Q313381'
                  },
                  {
                    relevance: 0.1137528270483017,
                    name: 'Stephen Curry',
                    wikiUrl:
                      'https://en.wikipedia.org/wiki/Stephen_Curry_(basketball)',
                    wikiQid: 'Q352159'
                  },
                  {
                    relevance: 0.09219113737344742,
                    name: 'Kim Kardashian',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Kim_Kardashian',
                    wikiQid: 'Q186304'
                  },
                  {
                    relevance: 0.07542215287685394,
                    name: 'Flo Rida',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Flo_Rida',
                    wikiQid: 'Q213538'
                  },
                  {
                    relevance: 0.07161719352006912,
                    name: 'Lloyd Banks',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Lloyd_Banks',
                    wikiQid: 'Q298668'
                  },
                  {
                    relevance: 0.06663219630718231,
                    name: 'Chanté Moore',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Chanté_Moore',
                    wikiQid: 'Q2956436'
                  },
                  {
                    relevance: 0.061652135103940964,
                    name: 'Jerry Jones',
                    wikiUrl: 'https://en.wikipedia.org/wiki/Jerry_Jones',
                    wikiQid: 'Q1280022'
                  }
                ],
                mediaKind: 'audio',
                description: {
                  standard:
                    'On this week’s episode, Parks begins by recapping his experience at his wife’s High School reunion over the weekend (15:30). Joe then plays an audio clip from an old teammate who says he had a triple-double against Oak Hill Academy (23:40) and the guys pay tribute to a close friend & legend, Hovain, who passed away over the weekend (30:38). Lastly, Balenciaga sues production company behind its controversial ad campaign (1:06:57), Meek Mill and Rick Ross reunite (1:28:36), praising the Soul Train Awards (1:47:15), Part of the Show (1:56:01), + MORE!\n  \n Become a Patron of The Joe Budden Podcast for additional bonus episodes and visual content for all things JBP.: Tap in here www.patreon.com/JoeBudden\n  \n Sleeper Picks:\n Joe | Marie Dahlstrøm feat. Delleile Ankrah - “Clouds”\n Ice | RAAHiiM - “Spin the Block”\n Parks | Rome Streetz feat. Armani Caesar - “Armed & Dangerous”\n Ish | Madison Paris - “Mine”',
                  short:
                    'On this week’s episode, Parks begins by recapping his experience at his wife’s High School reunion over the weekend (15:30). Joe then plays an audio clip from an old teammate who says he had a triple-double against Oak Hill Academy (23:40) and the..'
                },
                artwork: {
                  width: 1400,
                  height: 1400,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts125/v4/08/4c/5b/084c5b07-d5fd-e1aa-4762-d4369d7f1e4e/mza_1271598091786917531.jpeg/{w}x{h}bb.{f}',
                  bgColor: '1a1a1a',
                  textColor1: 'fdfeff',
                  textColor2: 'ffedee',
                  textColor3: 'cfd0d1',
                  textColor4: 'd1c2c3'
                },
                url: 'https://podcasts.apple.com/us/podcast/episode-582-the-triple-double-og/id1535809341?i=1000588096078',
                releaseDateTime: '2022-11-30T08:30:00Z',
                websiteUrl: 'https://www.youtube.com/c/joebuddentv/videos',
                durationInMilliseconds: 9293000,
                name: 'Episode 582 | “The Triple-Double OG”',
                guid: 'a770f3b8-3754-49d6-88ea-3f76c135f981',
                contentRating: 'explicit',
                artistName: 'The Joe Budden Network',
                subscribable: true,
                assetUrl:
                  'https://traffic.libsyn.com/secure/jbpod/Joe_Budden_Podcast_582.mp3?dest-id=2422538'
              }
            }
          ]
        },
        reviews: {
          href: '/v1/catalog/us/podcasts/1535809341/reviews?l=en-US',
          next: '/v1/catalog/us/podcasts/1535809341/reviews?l=en-US&offset=10',
          data: [
            {
              id: '9402883743',
              type: 'user-reviews',
              attributes: {
                date: '2022-12-16T17:37:26Z',
                review:
                  'This podcast helps me breakthrough my mental health and makes me want to stick around this world a little longer',
                rating: 5,
                userName: 'Roger wanyama',
                title: 'I love this podcast transport that'
              }
            },
            {
              id: '9399024365',
              type: 'user-reviews',
              attributes: {
                date: '2022-12-15T15:30:27Z',
                review:
                  'The Shultz, C the god clip referencing Rogan is really old. Over a year old but Joe’s just seeing it.',
                rating: 5,
                userName: 'DJWill44',
                title: 'Ep.586'
              }
            },
            {
              id: '9381754844',
              type: 'user-reviews',
              attributes: {
                date: '2022-12-10T17:24:31Z',
                review:
                  'Morgan need to close that card immediately. My mom has been lying to me about money things for years. It starts small and it will get bigger.',
                rating: 5,
                userName: 'King_Sie_',
                title: 'Ep. 585'
              }
            },
            {
              id: '9367422708',
              type: 'user-reviews',
              attributes: {
                date: '2022-12-06T16:38:34Z',
                review:
                  'I was a casual listener back in 2018 & became a fan in 2019. The show has evolved tremendously & despite the change of co-host they have kept the content raw & hilarious. The audio tho always great is impeccable, especially in the car. I listen to this pod everyday sometimes the same episode over & over. Thank you for being “Outstanding” & making my time & work fly by.',
                rating: 5,
                userName: 'Phase 10 Prince',
                title: 'Over the years'
              }
            },
            {
              id: '9357675180',
              type: 'user-reviews',
              attributes: {
                date: '2022-12-03T23:03:14Z',
                review:
                  'Joe is a wizard! Parks, Ice, and Ish are all the seasonings Joe needs for that perfect gumbo💯',
                rating: 5,
                userName: 'WuTangDon',
                title: 'The biggest‼️'
              }
            },
            {
              id: '9334226287',
              type: 'user-reviews',
              attributes: {
                date: '2022-11-27T11:08:47Z',
                review: 'The pod is finally getting its edge back!!!!💯',
                rating: 5,
                userName: 'shaqmadedabeat',
                title: 'Great pod'
              }
            },
            {
              id: '9306493644',
              type: 'user-reviews',
              attributes: {
                date: '2022-11-19T17:12:59Z',
                review:
                  'Joe Budden is the most insightful podder in terms of culture in the business',
                rating: 5,
                userName: 'The Smack God',
                title: 'Best pod in the game!!!!'
              }
            },
            {
              id: '9305805376',
              type: 'user-reviews',
              attributes: {
                date: '2022-11-19T13:41:19Z',
                review:
                  'I’ve been with this podcast since the first episode and while I was disappointed in the break up initially, I could hear the beef brewing in those podcast before it came to a head. I thought it would go down after the change, but it’s better than ever now. Ish is a welcomed addition 🙌🏽',
                rating: 5,
                userName: 'Picasowithapen',
                title: 'Long Live the Podfather 💪🏽'
              }
            },
            {
              id: '9290810538',
              type: 'user-reviews',
              attributes: {
                date: '2022-11-15T04:08:14Z',
                review:
                  'Love the show it got way better since Rory and mal got fired… Ice and ish are in fire 🔥🔥🔥🔥',
                rating: 4,
                userName: 'Shuan storm',
                title: 'Ice and ish 🔥🔥🔥🔥'
              }
            },
            {
              id: '9305305860',
              type: 'user-reviews',
              attributes: {
                date: '2022-11-19T10:54:39Z',
                review:
                  'Once Rory and Mal left the pod, it took a horrible direction. It’s not what it use to be. By the way it’s hilarious how they use reverse racism over and over again.',
                rating: 1,
                userName: '4 year listener',
                title: 'Long time listener, but I finally gave up on the pod'
              }
            }
          ]
        },
        'listeners-also-subscribed': {
          href: '/v1/catalog/us/podcasts/1535809341/listeners-also-subscribed?l=en-US',
          next: '/v1/catalog/us/podcasts/1535809341/listeners-also-subscribed?l=en-US&offset=15',
          data: [
            {
              id: '1572182022',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1572182022?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© All Rights Reserved',
                availableEpisodeCount: 130,
                genreNames: ['Music', 'Podcasts'],
                kind: 'episodic',
                releaseFrequency: 'Updated Semiweekly',
                seasonNumbers: [],
                description: {
                  standard:
                    'New stories, new laughs, new random hot takes that no one asked for... New Rory & Mal.'
                },
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts116/v4/e7/6e/57/e76e5713-cee0-f60d-9642-374050410d2b/mza_5035562531812198977.jpg/{w}x{h}bb.{f}',
                  bgColor: 'ffffff',
                  textColor1: '000204',
                  textColor2: '5f070a',
                  textColor3: '333536',
                  textColor4: '7f393b'
                },
                completed: false,
                languageTag: 'en-US',
                url: 'https://podcasts.apple.com/us/podcast/new-rory-mal/id1572182022',
                userRating: {
                  value: 4.7,
                  ratingCount: 6282,
                  ratingCountList: [281, 65, 82, 143, 5711],
                  ariaLabelForRatings: '4.7 stars'
                },
                releaseDateTime: '2022-12-13T10:00:00Z',
                trackCount: 130,
                displayType: 'free',
                createdDate: '2021-06-13',
                websiteUrl: 'https://new-rory-mal.simplecast.com',
                name: 'New Rory & MAL',
                contentRating: 'explicit',
                artistName: 'Rory Farrell & Jamil "Mal" Clay',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1572182022'
              }
            },
            {
              id: '1096830182',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1096830182?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                availableEpisodeCount: 355,
                copyright: '© 2022 The Black Effect and iHeartPodcasts',
                genreNames: ['Music', 'Podcasts', 'Society & Culture'],
                releaseFrequency: 'Updated Weekly',
                kind: 'episodic',
                seasonNumbers: [1],
                description: {
                  standard:
                    'Legendary Queens rapper-turned show host N.O.R.E. teams up with Miami hip-hop pioneer DJ EFN for a night of boozy conversation and boisterous storytelling. The hosts and guests engage together in fun, light-hearted conversation - looking back at their paths to success, highlighting their lives, friendships, and iconic moments within their career. In this unfiltered series, drinks are flowing and jokes are rolling - take a seat at the table with N.O.R.E & EFN. You Gotta Relax!'
                },
                languageTag: 'en-US',
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts122/v4/f3/70/46/f37046c4-71aa-c47f-b021-715ef11ea642/mza_13500741006164704336.jpg/{w}x{h}bb.{f}',
                  bgColor: '000000',
                  textColor1: 'eeeeee',
                  textColor2: 'fceb13',
                  textColor3: 'bfbfbf',
                  textColor4: 'cabc0f'
                },
                completed: false,
                url: 'https://podcasts.apple.com/us/podcast/drink-champs/id1096830182',
                userRating: {
                  value: 4.7,
                  ratingCount: 5980,
                  ratingCountList: [205, 122, 184, 405, 5064],
                  ariaLabelForRatings: '4.7 stars'
                },
                releaseDateTime: '2022-12-16T12:00:00Z',
                trackCount: 479,
                displayType: 'free',
                createdDate: '2016-03-24',
                websiteUrl: 'http://www.drinkchamps.com/',
                name: 'Drink Champs',
                contentRating: 'explicit',
                artistName: 'The Black Effect and iHeartPodcasts',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1096830182'
              }
            },
            {
              id: '1582681568',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1582681568?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© All rights reserved',
                availableEpisodeCount: 149,
                genreNames: ['Music', 'Podcasts'],
                kind: 'episodic',
                seasonNumbers: [],
                description: {
                  standard:
                    'Math Hoffa’s My Expert Opinion is THE BEST NEW HIPHOP PODCAST!! Creating a setting to express his opinion of music culture and getting the opinions of other celebrity vet’s in the game while sharing stories, good laughs and insights that are entertaining to the viewers. Make sure to to head over to YouTube.com/MathHoffaTV and subscribe to the channel so you don’t miss out on ALL NEW content on the way!'
                },
                completed: false,
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is1-ssl.mzstatic.com/image/thumb/Podcasts112/v4/a1/b4/ec/a1b4ec82-486e-3d09-a41f-80b534eaf447/mza_9693230288382565767.jpeg/{w}x{h}bb.{f}',
                  bgColor: 'ffffff',
                  textColor1: '0d0d0d',
                  textColor2: '2a2a2a',
                  textColor3: '3e3e3e',
                  textColor4: '545454'
                },
                languageTag: 'en-US',
                url: 'https://podcasts.apple.com/us/podcast/my-expert-opinion/id1582681568',
                userRating: {
                  value: 4.8,
                  ratingCount: 383,
                  ratingCountList: [7, 5, 10, 19, 342],
                  ariaLabelForRatings: '4.8 stars'
                },
                releaseDateTime: '2022-12-09T14:42:00Z',
                trackCount: 149,
                displayType: 'free',
                createdDate: '2021-08-24',
                websiteUrl: 'https://www.patreon.com/mathhoffa',
                name: 'My Expert Opinion',
                contentRating: 'explicit',
                artistName: 'Math Hoffa',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1582681568'
              }
            },
            {
              id: '862717788',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/862717788?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© All rights reserved',
                availableEpisodeCount: 167,
                genreNames: ['Comedy', 'Podcasts'],
                kind: 'episodic',
                seasonNumbers: [],
                description: {
                  standard:
                    "Charlamagne Tha God and Andrew Schulz are The Brilliant Idiots. Join them each week as they explore the issues of the day in a style that's often idiotic, sometimes brilliant and always hysterical."
                },
                completed: false,
                languageTag: 'en-US',
                artwork: {
                  width: 1400,
                  height: 1400,
                  url: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts115/v4/7c/ed/44/7ced4469-95d5-cc00-11b2-4d466eb8b61f/mza_9804079204184461627.jpg/{w}x{h}bb.{f}',
                  bgColor: 'f3e8c8',
                  textColor1: '000000',
                  textColor2: '323232',
                  textColor3: '302e28',
                  textColor4: '585650'
                },
                url: 'https://podcasts.apple.com/us/podcast/the-brilliant-idiots/id862717788',
                userRating: {
                  value: 4.6,
                  ratingCount: 10764,
                  ratingCountList: [484, 210, 359, 686, 9025],
                  ariaLabelForRatings: '4.6 stars'
                },
                releaseDateTime: '2022-12-17T04:17:00Z',
                trackCount: 167,
                displayType: 'free',
                createdDate: '2014-04-14',
                websiteUrl: 'https://soundcloud.com/thebrilliantidiots',
                name: 'The Brilliant Idiots',
                contentRating: 'explicit',
                artistName: 'Charlamange Tha God and Andrew Schulz',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=862717788'
              }
            },
            {
              id: '1460157002',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1460157002?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© 2022 Barstool Sports, Inc.',
                availableEpisodeCount: 199,
                genreNames: ['Music Commentary', 'Podcasts', 'Music'],
                kind: 'episodic',
                seasonNumbers: [1],
                description: {
                  standard:
                    'The Million Dollaz Worth of Game show, a weekly podcast with rapper/actor @GillieDaKing and social media influencer and disruptor @Wallo267 - The perfect blend of discussing music, real life issues, personal experiences, honest advice and comedy\n\nYou can find every episode of this show on Apple Podcasts, Spotify or YouTube. Prime Members can listen ad-free on Amazon Music. For more, visit barstool.link/mworthofgame'
                },
                artwork: {
                  width: 2500,
                  height: 2500,
                  url: 'https://is5-ssl.mzstatic.com/image/thumb/Podcasts125/v4/7b/cf/f6/7bcff6bb-5f99-6c2f-c6c5-3a9799f3df21/mza_8544742664200824246.jpg/{w}x{h}bb.{f}',
                  bgColor: '000000',
                  textColor1: 'fff4f6',
                  textColor2: 'faacb0',
                  textColor3: 'cbc3c4',
                  textColor4: 'c8898d'
                },
                completed: false,
                languageTag: 'en-US',
                url: 'https://podcasts.apple.com/us/podcast/million-dollaz-worth-of-game/id1460157002',
                userRating: {
                  value: 4.8,
                  ratingCount: 10102,
                  ratingCountList: [237, 93, 120, 248, 9404],
                  ariaLabelForRatings: '4.8 stars'
                },
                releaseDateTime: '2022-12-12T00:30:00Z',
                trackCount: 200,
                displayType: 'free',
                createdDate: '2019-04-17',
                websiteUrl:
                  'https://www.barstoolsports.com/shows/million-dollaz-worth-of-game',
                name: 'Million Dollaz Worth Of Game',
                contentRating: 'explicit',
                artistName: 'Barstool Sports',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1460157002'
              }
            },
            {
              id: '1235718592',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1235718592?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                availableEpisodeCount: 238,
                copyright: '© All rights reserved',
                genreNames: [
                  'Music Commentary',
                  'Podcasts',
                  'Music',
                  'Society & Culture'
                ],
                releaseFrequency: 'Updated Weekly',
                kind: 'episodic',
                seasonNumbers: [],
                description: {
                  standard:
                    'No topic is off limits for the Need To Know crew as they give their raw, thought provoking takes on current events, entrepreneurship, relationships, and more, propelled by their one-of-a-kind chemistry and relatability. \n\nJoin Savon Slater, Alex, Regi Cho and Devvon Terrell every Thursday for everything you need to know, on the Need To Know podcast. \n\nA producer and digital marketing mastermind (SaVon), a music encyclopedia in human form (Alex), a renaissance man and recording artist (Devvon Terrell), and a polished music journalist (Regi Cho) join forces to create an irreplaceably dynamic team of four.\n\nSubscribe, comment, and tune into the Need to Know Podcast.'
                },
                languageTag: 'en-US',
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts122/v4/9f/30/30/9f30305d-2539-214a-57cd-9e3f451eef6e/mza_12695417837110235044.jpeg/{w}x{h}bb.{f}',
                  bgColor: '30180c',
                  textColor1: 'fffefb',
                  textColor2: 'dfdedc',
                  textColor3: 'd5cfcb',
                  textColor4: 'bcb6b2'
                },
                completed: false,
                url: 'https://podcasts.apple.com/us/podcast/the-need-to-know-podcast/id1235718592',
                userRating: {
                  value: 4.6,
                  ratingCount: 417,
                  ratingCountList: [21, 4, 14, 24, 354],
                  ariaLabelForRatings: '4.6 stars'
                },
                releaseDateTime: '2022-12-15T05:51:00Z',
                trackCount: 238,
                displayType: 'free',
                createdDate: '2017-05-11',
                websiteUrl:
                  'https://open.spotify.com/show/1bsWFYAmfTzQpAjdo7t3ac?si=RGwdN6sbTWy17BJG51Q2yg',
                name: 'The Need To Know Podcast',
                contentRating: 'explicit',
                artistName: 'Need to Know Media',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1235718592'
              }
            },
            {
              id: '1534096260',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1534096260?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© 2022',
                availableEpisodeCount: 163,
                genreNames: [
                  'Music Commentary',
                  'Podcasts',
                  'Music',
                  'Music Interviews'
                ],
                kind: 'episodic',
                seasonNumbers: [],
                description: {
                  standard:
                    'Opinionated & informative with a taste of toxic: join Bridget Kelly & Mandii B every Tuesday for all things pop culture, music, and media through the minds of women.'
                },
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts112/v4/9f/fb/91/9ffb916a-af0d-0fb8-3646-57eeda5314c3/mza_945735870779170317.jpeg/{w}x{h}bb.{f}',
                  bgColor: 'a83900',
                  textColor1: 'fffceb',
                  textColor2: 'f0b88d',
                  textColor3: 'edd5bb',
                  textColor4: 'e29f71'
                },
                languageTag: 'en-US',
                completed: false,
                url: 'https://podcasts.apple.com/us/podcast/see-the-thing-is/id1534096260',
                userRating: {
                  value: 4.5,
                  ratingCount: 2934,
                  ratingCountList: [252, 72, 97, 181, 2332],
                  ariaLabelForRatings: '4.5 stars'
                },
                releaseDateTime: '2022-12-16T08:00:00Z',
                trackCount: 163,
                displayType: 'free',
                createdDate: '2020-10-01',
                websiteUrl: 'https://art19.com/shows/see-the-thing-is',
                name: '"See, The Thing Is..."',
                artistName: 'All The Things Productions',
                contentRating: 'explicit',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1534096260'
              }
            },
            {
              id: '1070016067',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1070016067?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© 2022 The Black Effect and iHeartPodcasts',
                availableEpisodeCount: 435,
                genreNames: ['Comedy', 'Podcasts'],
                kind: 'episodic',
                seasonNumbers: [2],
                description: {
                  standard:
                    "Welcome to the 85 South Show - a podcast for people who don't know what a podcast is. Hosted by DC Young Fly, Karlous Miller , and Chico Bean. For more check out www.85southshow.com"
                },
                completed: false,
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is2-ssl.mzstatic.com/image/thumb/Podcasts112/v4/f7/7d/eb/f77debf0-190d-b1b8-fd8f-4aa26b081194/mza_14833684916801168993.jpg/{w}x{h}bb.{f}',
                  bgColor: '000000',
                  textColor1: 'ffffff',
                  textColor2: 'fac04b',
                  textColor3: 'cbcbcb',
                  textColor4: 'c89a3c'
                },
                languageTag: 'en-US',
                url: 'https://podcasts.apple.com/us/podcast/the-85-south-show-with-karlous-miller-dc-young-fly/id1070016067',
                userRating: {
                  value: 4.9,
                  ratingCount: 7734,
                  ratingCountList: [96, 59, 115, 172, 7292],
                  ariaLabelForRatings: '4.9 stars'
                },
                releaseDateTime: '2022-12-16T22:00:00Z',
                trackCount: 452,
                displayType: 'free',
                createdDate: '2015-12-21',
                websiteUrl: 'https://www.85southshow.com/',
                name: 'The 85 South Show with Karlous Miller, DC Young Fly and Chico Bean',
                contentRating: 'explicit',
                artistName: 'The Black Effect and iHeartPodcasts',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1070016067'
              }
            },
            {
              id: '1179189860',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1179189860?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© All rights reserved',
                availableEpisodeCount: 218,
                genreNames: ['Comedy', 'Podcasts'],
                kind: 'episodic',
                seasonNumbers: [],
                description: {
                  standard:
                    'Flip Da Script is an Urban Podcast hosted by QueenzFlip & Dj Gmoney. Queenzflip who is known for his crazy antics; his ability to get the truth out of his guest as well as FLIPPING on his guest from time to time. Dj Gmoney is the more rational and peaceful one. With this amazing duo The show is a combination of realism and comedy; a much watch show in today’s environment.\nTo get the visual experience go to https://www.youtube.com/quietroombattle'
                },
                languageTag: 'en-US',
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is5-ssl.mzstatic.com/image/thumb/Podcasts71/v4/93/2a/91/932a918f-2d15-2d0e-e2f1-e25d39933e79/mza_599828714286385753.jpg/{w}x{h}bb.{f}',
                  bgColor: 'ffffff',
                  textColor1: '010302',
                  textColor2: '5b0000',
                  textColor3: '343535',
                  textColor4: '7c3333'
                },
                completed: false,
                url: 'https://podcasts.apple.com/us/podcast/flip-da-script-podcast/id1179189860',
                userRating: {
                  value: 4.8,
                  ratingCount: 1675,
                  ratingCountList: [23, 15, 33, 77, 1527],
                  ariaLabelForRatings: '4.8 stars'
                },
                releaseDateTime: '2022-12-04T17:01:00Z',
                trackCount: 218,
                displayType: 'free',
                createdDate: '2016-11-23',
                websiteUrl: 'https://soundcloud.com/flipdascriptpod',
                name: 'Flip Da Script Podcast',
                artistName: 'QueenzFlip',
                contentRating: 'explicit',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1179189860'
              }
            },
            {
              id: '1232428553',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1232428553?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© 2022 iHeartPodcasts',
                availableEpisodeCount: 2000,
                genreNames: ['Comedy', 'Podcasts'],
                kind: 'episodic',
                seasonNumbers: [1, 2, 3, 11],
                description: {
                  standard:
                    "The World's Most Dangerous Morning Show, The Breakfast Club, With DJ Envy And Charlamagne Tha God!"
                },
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts112/v4/7b/a4/a5/7ba4a5c6-ab16-3ed9-f3c9-38dafb593241/mza_10642188350151112679.jpg/{w}x{h}bb.{f}',
                  bgColor: '000000',
                  textColor1: 'fafafa',
                  textColor2: 'fda61a',
                  textColor3: 'c8c8c8',
                  textColor4: 'ca8514'
                },
                completed: false,
                languageTag: 'en-US',
                url: 'https://podcasts.apple.com/us/podcast/the-breakfast-club/id1232428553',
                userRating: {
                  value: 4.4,
                  ratingCount: 12410,
                  ratingCountList: [983, 352, 560, 1100, 9415],
                  ariaLabelForRatings: '4.4 stars'
                },
                releaseDateTime: '2022-12-19T12:22:00Z',
                trackCount: 2032,
                displayType: 'free',
                createdDate: '2017-05-02',
                websiteUrl:
                  'https://www.iheart.com/podcast/the-breakfast-club-24992238/',
                name: 'The Breakfast Club',
                contentRating: 'clean',
                artistName: 'iHeartPodcasts',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1232428553'
              }
            },
            {
              id: '978037629',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/978037629?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© All rights reserved',
                availableEpisodeCount: 101,
                genreNames: ['Comedy', 'Podcasts'],
                kind: 'episodic',
                seasonNumbers: [],
                description: {
                  standard:
                    'Say hello to the bad guy as Taxstone brings you an unfiltered view from the streets of Brooklyn because life is always about progression.'
                },
                completed: false,
                languageTag: 'en-US',
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts115/v4/b7/e1/7c/b7e17c79-3b80-df46-3a37-37d0947cea95/mza_7081145913568930111.jpg/{w}x{h}bb.{f}',
                  bgColor: '050b12',
                  textColor1: 'e7f1ee',
                  textColor2: 'f9e9e6',
                  textColor3: 'bac3c2',
                  textColor4: 'c8bdbc'
                },
                url: 'https://podcasts.apple.com/us/podcast/tax-season/id978037629',
                userRating: {
                  value: 4.9,
                  ratingCount: 3233,
                  ratingCountList: [48, 23, 37, 100, 3025],
                  ariaLabelForRatings: '4.9 stars'
                },
                releaseDateTime: '2022-06-17T04:03:00Z',
                trackCount: 101,
                displayType: 'free',
                createdDate: '2015-03-19',
                websiteUrl: 'https://soundcloud.com/taxseason',
                name: 'Tax Season',
                contentRating: 'explicit',
                artistName: 'Taxstone',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=978037629'
              }
            },
            {
              id: '1537836233',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1537836233?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© 2020 I Am Athlete Podcast',
                availableEpisodeCount: 272,
                genreNames: ['Sports', 'Podcasts', 'Society & Culture'],
                releaseFrequency: 'Updated Daily',
                kind: 'episodic',
                seasonNumbers: [1, 2, 3],
                description: {
                  standard:
                    'I Am Athlete is a media company focused on the intersection of business, entertainment , music, and sports. Founded by former NFL wide receiver Brandon Marshall, and hosted with Adam "Pacman" Jones, LeSean "Shady" McCoy, and special guests. IAA creates athlete-led content that resembles a “locker room”— a safe space for athletes and celebrities to tell their stories and have a voice while feeling comfortable amongst one another. All shows are unscripted and unfiltered, unravelling cultural discussions centered around sports, wellness, music, culture, fashion, and mental health. #BiggerThanAPodcast'
                },
                languageTag: 'en-US',
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/6f/3e/bf/6f3ebffa-6c63-dcd1-8f4d-d4a741a36119/mza_7922509544603097800.jpg/{w}x{h}bb.{f}',
                  bgColor: '010101',
                  textColor1: 'fcfcfc',
                  textColor2: 'e1e1e1',
                  textColor3: 'cacaca',
                  textColor4: 'b4b4b4'
                },
                completed: false,
                url: 'https://podcasts.apple.com/us/podcast/i-am-athlete-podcast/id1537836233',
                userRating: {
                  value: 4.5,
                  ratingCount: 1641,
                  ratingCountList: [168, 18, 24, 53, 1378],
                  ariaLabelForRatings: '4.5 stars'
                },
                releaseDateTime: '2022-12-16T02:37:00Z',
                trackCount: 272,
                displayType: 'free',
                createdDate: '2020-10-28',
                websiteUrl: 'https://i-am-athlete-podcast.simplecast.com',
                name: 'I Am Athlete Podcast',
                contentRating: 'clean',
                artistName: 'Brandon Marshall, SiriusXM',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1537836233'
              }
            },
            {
              id: '1493353598',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1493353598?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© 2022 The Black Effect and iHeartPodcasts',
                availableEpisodeCount: 223,
                genreNames: [
                  'Music Interviews',
                  'Podcasts',
                  'Music',
                  'Society & Culture'
                ],
                releaseFrequency: 'Updated Semiweekly',
                kind: 'episodic',
                seasonNumbers: [1],
                description: {
                  standard:
                    'Two Atlanta legends Big Bank and DJ Scream bring you the long awaited BIG FACTS Podcast!'
                },
                languageTag: 'en-US',
                completed: false,
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/a1/f2/69/a1f26993-621d-8ba7-4862-a09ec45ec653/mza_13633358022444641111.jpg/{w}x{h}bb.{f}',
                  bgColor: 'ffffff',
                  textColor1: '000000',
                  textColor2: '2a2a2a',
                  textColor3: '333333',
                  textColor4: '545454'
                },
                url: 'https://podcasts.apple.com/us/podcast/big-facts-with-big-bank-dj-scream/id1493353598',
                userRating: {
                  value: 4.8,
                  ratingCount: 746,
                  ratingCountList: [26, 7, 10, 17, 686],
                  ariaLabelForRatings: '4.8 stars'
                },
                releaseDateTime: '2022-12-14T02:50:00Z',
                trackCount: 224,
                displayType: 'free',
                createdDate: '2020-01-01',
                websiteUrl: 'http://www.bigfactspod.com',
                name: 'BIG FACTS with Big Bank & DJ Scream',
                contentRating: 'explicit',
                artistName: 'The Black Effect and iHeartPodcasts',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1493353598'
              }
            },
            {
              id: '1448534366',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1448534366?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© All rights reserved',
                availableEpisodeCount: 198,
                genreNames: ['Comedy', 'Podcasts'],
                kind: 'episodic',
                seasonNumbers: [],
                description: {
                  standard:
                    "Wax and Lorel are the Bully and The Beast (but which one is which) Catch them every week, as they take calls from listeners looking for advice on sex, love, and life from podcasting's funniest frenemies!"
                },
                languageTag: 'en-US',
                artwork: {
                  width: 1600,
                  height: 1600,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts115/v4/35/0d/c1/350dc12b-56e5-ac43-8e15-96cf695b03bf/mza_10535787074064806335.jpg/{w}x{h}bb.{f}',
                  bgColor: '5a5a5c',
                  textColor1: 'f0ebec',
                  textColor2: 'dfcfd7',
                  textColor3: 'd2cecf',
                  textColor4: 'c4b7bf'
                },
                completed: false,
                url: 'https://podcasts.apple.com/us/podcast/the-bully-and-the-beast/id1448534366',
                userRating: {
                  value: 4.7,
                  ratingCount: 2067,
                  ratingCountList: [62, 28, 52, 103, 1822],
                  ariaLabelForRatings: '4.7 stars'
                },
                releaseDateTime: '2022-12-07T20:24:00Z',
                trackCount: 198,
                displayType: 'free',
                createdDate: '2019-01-04',
                websiteUrl: 'https://www.patreon.com/thebullyandthebeast',
                name: 'The Bully and the Beast',
                contentRating: 'explicit',
                artistName: 'Loud Speakers Network',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1448534366'
              }
            },
            {
              id: '1483638752',
              type: 'podcasts',
              href: '/v1/catalog/us/podcasts/1483638752?l=en-US',
              attributes: {
                offers: [
                  {
                    kind: 'get',
                    type: 'STDQ'
                  }
                ],
                copyright: '© 2022 The Black Effect and iHeartPodcasts',
                availableEpisodeCount: 253,
                genreNames: [
                  'Basketball',
                  'Podcasts',
                  'Sports',
                  'Society & Culture'
                ],
                kind: 'episodic',
                seasonNumbers: [1, 2],
                description: {
                  standard:
                    'ALL THE SMOKE pairs two of the most outspoken and controversial players of their time. Known as fiery, intense competitors during their on-court careers, Matt Barnes and Stephen Jackson are now two of the most widely respected voices by today’s crop of NBA stars. Serving as mentors to numerous players throughout the league and with their hands firmly on the pulse of the game, they have first-hand insight into the minds, lives and pressing issues facing today’s players. Barnes and Jackson, who have played alongside two generations of All-Stars, will dish on the latest news and drama from on and off the court without boundaries.'
                },
                artwork: {
                  width: 3000,
                  height: 3000,
                  url: 'https://is4-ssl.mzstatic.com/image/thumb/Podcasts122/v4/04/72/ea/0472eaec-e971-d994-c246-c39365aa065c/mza_7185089796520995945.jpg/{w}x{h}bb.{f}',
                  bgColor: 'cfd4e7',
                  textColor1: '080709',
                  textColor2: '1f1f28',
                  textColor3: '303036',
                  textColor4: '42434e'
                },
                completed: false,
                languageTag: 'en-US',
                url: 'https://podcasts.apple.com/us/podcast/all-the-smoke/id1483638752',
                userRating: {
                  value: 4.7,
                  ratingCount: 6807,
                  ratingCountList: [304, 45, 105, 206, 6147],
                  ariaLabelForRatings: '4.7 stars'
                },
                releaseDateTime: '2022-12-15T19:24:00Z',
                trackCount: 256,
                displayType: 'free',
                createdDate: '2019-10-15',
                websiteUrl: 'https://www.sho.com/',
                name: 'All The Smoke',
                contentRating: 'explicit',
                artistName: 'The Black Effect and iHeartPodcasts',
                subscribable: true,
                subscriptionUrl:
                  'https://buy.itunes.apple.com/WebObjects/MZFinance.woa/wa/subscribePodcast?cc=us&id=1483638752'
              }
            }
          ],
          meta: {
            metrics: {
              reco_shelfCategoryId: 'mapi.category.podcasts_cab',
              reco_displayType: 'CAB',
              reco_eligible: '1',
              reco_algoId: 'V1'
            }
          }
        }
      }
    }
  ]
};
