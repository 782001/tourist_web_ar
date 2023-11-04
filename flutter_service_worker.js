'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "fe7d81814e02eb1296757e75bb3c6be9",
".git/config": "9c6afb213f23ca25bbea96279ed7c4a6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "267bd84e774f963b85e0f61ed80752c5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fa468d999f8905a05d84233b186c4928",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "457c075ac37cc77d7b55133063eb9d85",
".git/logs/refs/heads/main": "457c075ac37cc77d7b55133063eb9d85",
".git/logs/refs/remotes/origin/main": "0bd585f5aecae6a54bed099d5d11731c",
".git/objects/01/74cae2e685abde232f8f99d0e2daae310d88b3": "c9e9f582b6e116282d82937ecc410277",
".git/objects/03/6d37ef590bed458631bf3ceed100a2bfdf4b84": "c2e54d070b177915c3f12c4e49474960",
".git/objects/03/797d8dd04729fbb88d77dc0fbfeebcf2d55114": "219803f4e2d88d0a61916bd79776ab6e",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/b96adf30645a780ad4ab7834eb40913be23804": "a771533b3f2f3eba8573480550f30c16",
".git/objects/05/5f3e1e7942717fbdbcc0b771d890905b2924b5": "b6cd7249d153582cc57c9909989afdd5",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/0a/493af4723961bfece1f8495db159b4f17e04f5": "f6ba27d4b49b3b54f5b3b56d288669a4",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/596a4e0d66b145cf89a620e7b763a0b4986226": "7f9652dda62d1cb99474276b97407016",
".git/objects/0d/ad4e92363a19b1cd821b581fa9afdef0c1d886": "e786d2395d6756bde882b4ce3a676c5b",
".git/objects/13/7bdc30182f0003e1210f096b429714c41d56b6": "0db6f90655e7d5e6331833eb6b80d9fd",
".git/objects/13/cd596d130b66354002357dfa2c3d7939031e75": "368daeca1841cc00e61c5a4295f667c9",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/19/08bba1004c59f410f76be6ad6abf4d8120ad6a": "37c09490bb1659172849e8ea7ae86ca1",
".git/objects/19/a05a0adb7bfafe272d0465af34f22ae1e26984": "6cfa778402921f2736909f72b0639ae4",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/be72d4c6f2ddfeb82468636c1a1ca92548e113": "ca0b4773cc33cfe0bb69afe9a07a6698",
".git/objects/1d/f58b52eba43b14cf67a39332ae152e44198226": "6f4de12ab0868ec64fceae2ad294bd69",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/acaac93870923f86f6a4adeb0e5e08f9f87796": "4f2c05e23e03ed9d8bb95d3666f14871",
".git/objects/22/c549c142af7e1f01a4309f1698c602a000b83d": "1cedfcce813c33eb03209aa0c0fe68bf",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/c359cabd5c8f1bade3b1c87f5533f718d649cd": "ecef26d4c4788bc313e96163be6c95ac",
".git/objects/26/c5dc9ff2efd1c313ce9b9c411881a5ec4d4023": "29d3447071c0ee118c4eb4f666f51d6c",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/29/6c8f632e1bae7ea82c2cfa50a749668f158cd5": "de8f25dbea54dfa4fdd5180fa029055a",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2e/7c401f1ec6a68952084e4fdfa8b910bfca1e3d": "1bbe35fc611f17b1cb37fda44eb25b76",
".git/objects/2e/8cc1359849c89e428e06091e9146ef906ffa18": "5d48caee8cad92d6e7ea4f659400903b",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/33/5f3b3448c348098ccd2ab15257440a8f3385a2": "86826faf7ea8532d13fc193aaf7dd8a6",
".git/objects/34/aa3a9008275adbceb792f90b302ce51719e412": "eb3d510fecfbc282965973967bf9a7ee",
".git/objects/35/5f597cc596b184f29e710983a7fc6dcff1a50b": "4e9fb06aa76534a8333065478027b79a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/edc77aa24ffa781966a6a6b92691855a5a0ca1": "4541038f42e7f2815470f6a72a55c799",
".git/objects/37/6cd6fa0aa703631c25e78b0c784d00a2780e90": "6c2a8d1b82e2286c83018b7f1b2d5fc0",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/2098438aab4ad8b957f9a9d6bea728d1a2cfb2": "bd7180dcccca79a55f8562863918529b",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3c/f5b371c85b7c6d5501701f83e5905320011735": "5bfb962499249cc687f3610f156c5c67",
".git/objects/3d/3cae803af05471a647efe7b8c1abca0f9bf095": "fbf60655f3752144099af9029f2c45b7",
".git/objects/3e/221ad3fd4b397d20cf25f4c17d553e431ad6e7": "6c7f749c05a557c5de3f142f244aeef1",
".git/objects/3f/7d1509fdf074f55891d030f631515dfd351ee7": "dd8be375413d783eaf83eed75eed8a6b",
".git/objects/41/8706d3b01ad95e5850c93866eea983adea8856": "3ac976ca89a2208cc646a2bd91e5abb2",
".git/objects/43/b863919b2ca21d44b454fa6ad40d4bc8b105a2": "6495e5d1c8ec23843f4c866ef41bf487",
".git/objects/46/307acdea1b5d407491f42871bc2a31cd81dac7": "adc8874cee9fbd4d3caeb8c259e85075",
".git/objects/48/8c9c6af67c4caeadc777ff9896d64f704bea2f": "704b4fd93b73f85e06b2f5de3fb9bfbd",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4c/65c0576251796df009b08034567687c0509980": "e7dab02cb5ce7583f1330a64bec647e2",
".git/objects/50/78e2cdc39bdcab9d020ac52aafd643b505d6e3": "15bb84cc2ae4ae0a96ad9dcb7f0a1c87",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/54/b8ead0a5f5fb6e8b2866b41e6c7dc0fce7e4f9": "6b3cc4919914066f29702bc0d9657de1",
".git/objects/58/0712131535a2d19c48568c15ed611b755a0c1f": "346f085405e7fff1b376640a458bef52",
".git/objects/5d/4cf37da6e40d208c6170c57d7912f060a978d3": "8bd81949ca0a323988ee5f5da0470393",
".git/objects/61/81fe40f4301a5918d265138f083ba80fffa6cd": "ab1ef82f387ec6896960bd7a195c563a",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/abac66de69a8267219c57876395f11e940402c": "96445181e26f55246c8223e74fcddc49",
".git/objects/66/4c7d06f22b0d56600f7f0343916fbb6440cb25": "e2f2afd01fb8253fa538762a04fe1fc3",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6b/ce7fc7dd5e4ca4aa6c71b43621ec48d4a80df9": "fa135e07c41a23346d9a8d6b78c8083a",
".git/objects/6e/030a9990844d9ad0d52587fd84ff4c0f1463c2": "39b98f9e6ffa4659004cb4da46d45aa3",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/704f7b27a307c6f565fe489aed46b9644b7a9b": "a68602e4797ce8381af00fb360952155",
".git/objects/75/3a370be8a97c1ad0f0b4201cd50bd318be1148": "9cfdfc4a5cb71aaecca2e41dae446b69",
".git/objects/76/736248d515c2a8a4abe1737c9062dac0e612d5": "01e6b1bbfca5fbb13990121e35b358eb",
".git/objects/79/c2fbf167c2ffadc441db4542f8957a27b499eb": "26d498498e4e98308619bbbf97945bb3",
".git/objects/7a/a206e904230431be148f2d2a1b4bdd8aaa7e0b": "4b93d3434dfa87e5d04d93a81bc1687d",
".git/objects/7b/1d9c1cf155966ab6d4146d30eae0394edde9f8": "8462b75e101c68c423532ce010fef325",
".git/objects/7b/ac9a555a1167bf08824513ffaaa4cd7bf3eef8": "53e2f38076da9fa71487c21dbf2598e6",
".git/objects/7e/7139cefbe7220fd72403087003ca4f2b749206": "f8a03b414e88f846187241c1e6bf01c8",
".git/objects/7e/c93a17acc2e0d1d429b2c57c77dd814712323d": "f45d89f525c87910531205c3e7bac51b",
".git/objects/83/488c864d763f000a0ed5369ef45428064c25a6": "d4bdb559c38f4e7c0774250d561721ea",
".git/objects/83/b3915cd82a7abe9aff4a77eba50cfd54bdf9dc": "982f9075d5b8a2fd3899ac2f901703ae",
".git/objects/84/bc1573e3bba23700816945f7385840181306dd": "d02ee5be709b77f58e95740805f5779b",
".git/objects/88/3e3c93c5b81caccbe9a26df9f290ef178fd9f7": "96e6ecb80fa9ae96df7cc7522aaec22b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/03f1f58a00327e00a4fb0ccda795a1bdaae5d3": "2181f0473cce882c61cb9f17c73869ad",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7a1aed602a8b20ee16ef7547ee5b4b05931195": "4dcabefc81d7e74d94a376cce682ba2e",
".git/objects/8e/0565336ba814f1b7269b517b9fbce95d35f847": "1eca0fa2e1e1ed20278938eead3f6d00",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/91/a3ff05047725cd26c2c33e3709c128ac5d70ae": "2b4e68f623296e2d7ee6fe2f3215afd9",
".git/objects/94/26d9fc7fb89aebce83d18c8643ae06de9eae26": "81d8c2a2f815c23df388fa883b24ac30",
".git/objects/96/416d042ecb531df2ac014140e05b9b106c2b74": "2eab1a164d138720f5132f9ba4ca243f",
".git/objects/97/2d8be4e5f1f2950701e45ce4991e257e210062": "876942ce66927114543365431aa6d5d1",
".git/objects/9b/ea1b780e734e332a1f8f042da55aa4d9ba20c7": "64b3e9db23bae9830d24efdf1536138c",
".git/objects/9f/18ba9bdc6b695527dddb14023060b2b0ae15e7": "37a3e4deaa5376c0f06a6ec0906bdbb6",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a4/1761e4f9c63ce277de9565f4b24033a9810a0f": "5f26b5a5c0da07f1c12953984f7a167b",
".git/objects/a4/aa5da8c7f77443cfbc88d6f567efa6eb7b2b3e": "8fab2a32652e04bba35582f961c41238",
".git/objects/a4/aa78c53a52bab6214f1ba77b2ced51ed817d3b": "9fddcc37210fafc56f9813629434c49f",
".git/objects/a9/87a4e7746ac950c0ea0bb96aace82f3f809199": "c923373bb036019902773b74490f2579",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b0/c49980b791b2a6fbaa345ad3331f1e8931fbcd": "274a5b235bf7473700b71be5a09e1975",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/5f86662cdd0fddf30a832b72b0fbb8a09704c1": "43079cdce32dde8b6f0b5c8d9913f517",
".git/objects/b5/59df292810b65ce85a7b4aafefe41f37eab3ff": "f8444cd33812e1290b3f6cf027cfdeca",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/c46ebb90e73baf1de8ba391c766758fab506b7": "de54ec9e5f40929b48d34a4135125864",
".git/objects/ba/d0327049568b1073d9879b4d05c53ca2e6734b": "b0ed8851aa851aab8978c8e581271b1e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c9/9afe1b1edd44b734b904ac36fde801b0832600": "ef5184ace662e6804796179ac6b1d8c7",
".git/objects/ca/21bf130464abbeaed8c73fe632fe189b84a5f9": "06ed38f525c7a28c6992b38901fd5764",
".git/objects/cb/623055a1264ec42992278aa5b8adae84e0052b": "9245b6cddec5130ccf575b5cf3bdb29c",
".git/objects/cc/6be782dc4b5c2bf1eb6524d6dfb32ac351b8d3": "de4bd10ba53cd4c957d47d29e378293e",
".git/objects/cd/4ce75bbcf9df080dd13b35482c24b6f871e318": "401572631a2c1c02fbb5b8489ce16cc1",
".git/objects/d1/890bb586f905ead428fb096a7c0fbd47822f20": "1f1ae017c7a778a5105c76ecfff3bfa0",
".git/objects/d2/60e9c4384a107f73928076e5f8d1818a5a80d0": "1108f05b9fd7d37664fdf6c364816e5f",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d3/fdf126afff55320b4cf6971edf1ad5bbfb9935": "8110d75f3dc10658dacefa4c43013c69",
".git/objects/d4/ba909198fc0673d123b269f58e01c1138a42c7": "00d745a03deba023c84b87d196e9b3c9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bf892458e4d771015740ae8164f7869baf02fa": "5844269c3dd615821bc49c98ee079196",
".git/objects/d9/ecf9f07faf26e9e5dd8839ba2047a921d0405f": "49b94e8fd136f0df29d725d71ade5780",
".git/objects/da/d868781ad8ca5631553cbe4dad0252be3ea4c7": "e108adcb629a0f8813e439e8b9f6872a",
".git/objects/dc/c4d54f1296380009ef511eea5e79d895fab8b3": "58521f431604349a4714952d46b88705",
".git/objects/e0/e874d15e2e06611241ee4cd340a73ede5a35ad": "e09aaf365fe41d2c9104877884da53ce",
".git/objects/e0/f24b50369c66b5a3b6057e08dc8d936c1f544c": "7085bbfaf95d21ec8c40631fa3a0926a",
".git/objects/e3/59868dea320abb1e2689771082c6971185071d": "910bee0822579285c8cbba19a7061519",
".git/objects/e4/7a58932a0f2bda59a5c2c92503da411bfbd0ba": "bee3e5f3f6819f2b58ba9377a777eb3e",
".git/objects/e6/970fb0db54513dc4f94e7b796653e168026aa9": "7e9e80c952160752e2b3f023293cb49a",
".git/objects/e9/9a327656a50abb69b3ebbb1c137fa8464d6253": "57c6c5dcaa35a5cffb69b24c3a7a757b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c22bcffdecd549571eed59fd23593f279656bf": "6280375a987e31c221c992cd142dd9ef",
".git/objects/ee/2b5e51b46005d1ab8c39bf6bdd219cae8500a9": "4836904e6dcdc7921e4592ac77e541ff",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f5/3d04e9c6a335fd7bc71170b26c15b01b9f916a": "8dc7a4f9c883c0e6dfbf2d47767dfdc1",
".git/objects/f5/3e40641170f31f507b931aa4881afa2797ed7d": "9b591ab556b9d29cf34a20e959bf18a0",
".git/objects/f6/9cccacf3a47ea3b76d36dbd233c674dcd29c11": "10c78f5a21ee18d6b3e37adf5043555c",
".git/objects/f7/4de406d1ad32fa9adec34441ab2c560d0450b5": "fbec0c54ea01343c8af89d58e81ba114",
".git/objects/fb/df4a54c874af8913e3afd5723db3d6fdcbe9a3": "1051ac647d5f8aa06310d7d9cf9a030a",
".git/refs/heads/main": "7af4d7239f81ec445bb86069e0492adf",
".git/refs/remotes/origin/main": "856bdc6cfb3e7b443db383f899122d15",
"assets/AssetManifest.json": "11dfefa93dd6e3053371c2451291bb6d",
"assets/AssetManifest.smcbin": "f5acabeb886eba9b2d0fa60ea8ff448f",
"assets/assets/images/background.jpg": "1709f270977d3fc30c2478793cf153d2",
"assets/assets/images/background2.jpg": "22d1fd318210d2e5e5f9a0f663ec3c83",
"assets/assets/images/child.jpeg": "098175dd49d276c0f961bb93efca7b7a",
"assets/assets/images/cold.png": "48b4cfed996bef545098ab3c59e0c3d8",
"assets/assets/images/cool.jpeg": "6d0e953465104963b92c3a6a8e0365ff",
"assets/assets/images/current.png": "6b8d9b156a175c2dde76b6503c0c8749",
"assets/assets/images/dieseases_icon.jpeg": "a3b9dbdfcf5ed58604f7b71a97fa4378",
"assets/assets/images/down.png": "bad8d758dabda0b7e966d2882b246b8e",
"assets/assets/images/facebook.png": "4ce7a9138727037b53c000b540aa2477",
"assets/assets/images/google.png": "858fbe5dcadc270b68cf661d206ae52a",
"assets/assets/images/Head.png": "89fae69f482d598796e99ef1ad97c578",
"assets/assets/images/heart.jpeg": "bcf8263b14a4dd7377e1dfc1acdc9622",
"assets/assets/images/homeImage.jpg": "679683bf86e74912f6767069cbd9d47a",
"assets/assets/images/homeImage2.jpg": "afd51bea6a9493db7babe87101b739c9",
"assets/assets/images/location.png": "f001e26c61e8a355f0b9aec7951b3456",
"assets/assets/images/loge.png": "2eb61d53c0a56e9439562f025efbfbd7",
"assets/assets/images/login.png": "25c991e29e1acb7308436cdafd7c3242",
"assets/assets/images/M-removebg-preview.png": "ef8313e18abe929cbf9e3de666afc9c9",
"assets/assets/images/M.jpg": "70388a43ce0fb4c8583e66365a059957",
"assets/assets/images/Maha.jpg": "2ed4c7e86e6b2daefd8ff496a306743c",
"assets/assets/images/mahatat.png": "ae294af3abeb6e99d2768ed6b698c27e",
"assets/assets/images/mahatatBoa.jpg": "67a8a136a57d0f7492c7fe99ff698aec",
"assets/assets/images/my_icon.png": "7a09b4ce2531029e538699bfa7ee6034",
"assets/assets/images/my_icon.svg": "7a09b4ce2531029e538699bfa7ee6034",
"assets/assets/images/my_logo.jpg": "8a6af296549de758db408f1e4016d564",
"assets/assets/images/nerest.png": "b12eb5ef897f1dbe16abbc358f7da488",
"assets/assets/images/practice_Healthy_habit.png": "08c42937e16381a5e1656a7f1c7255d9",
"assets/assets/images/respect.png": "075240e62383b3d3822bad11c9a3830a",
"assets/assets/images/ret.jpg": "67a8a136a57d0f7492c7fe99ff698aec",
"assets/assets/images/ret.png": "bea87e167a8d44decf194735b16e65c2",
"assets/assets/images/test.jpg": "842ff545b24655cc55cb70770265122e",
"assets/assets/images/test2.jpg": "e25f20502d34387cf962e0d8d62146e0",
"assets/assets/images/twitter.png": "f3a9f3c44d4b923e46ad2c7c5e434f02",
"assets/assets/images/Video.png": "21b9a3ac704555686f51fcad4c84d796",
"assets/assets/images/west.png": "f598f7292aaf18d6bfc06fbfd4c25a01",
"assets/assets/images/World%2520Down%2520Syndrome%2520day-bro.png": "0f74735f14dc2cfd5347bca658431459",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "3f5ed646a5410895be4b07fecab134d3",
"assets/lang/ar.json": "1b513aec958286c8c57a77559a8d27e4",
"assets/lang/en.json": "de4d32e8d66273d58be139d58cdc51a8",
"assets/NOTICES": "2d60f1ab999cf94120c2e76b2053302d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "622a53fa94da2eb29c55be83babc9981",
"/": "622a53fa94da2eb29c55be83babc9981",
"main.dart.js": "a49b036d186aca5828b13023d2a9621b",
"manifest.json": "8832dcc9a4a4777e7edb874c559345df",
"version.json": "09dcdf926852aef71ba7531b392016c9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
