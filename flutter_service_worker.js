'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "897316929176464ebc9ad085f31e7284",
".git/config": "068a0383435c3df8961fca6af7da53df",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2557e27d9a2e123f95cb8d11048c01d6",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
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
".git/index": "fe9a2cb6acd43af4e61088e69569dc6e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5104a34eabae8f073ce52bb4c54e6538",
".git/logs/refs/heads/master": "5104a34eabae8f073ce52bb4c54e6538",
".git/logs/refs/remotes/origin/master": "1e47b8e99baf949ab9bfcb482c89c9ad",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/04/040286d8a8329d126938458ddef53a3971a055": "b52ddb1a2c43f7ac589b8eabbfbb2948",
".git/objects/04/5a3217a83329c40c22fe56b0951aed898ac9dc": "7d38490ac428833cfacc9829d3bfaa00",
".git/objects/05/5f3e1e7942717fbdbcc0b771d890905b2924b5": "b6cd7249d153582cc57c9909989afdd5",
".git/objects/05/9fa4dd92a8c1bab9b884f811cfd6d6782f17f1": "97b064b679f5287ecf00d88f09788a6c",
".git/objects/06/5a156ad876ae75d08bca0aabc8c1e01f285abb": "1338ac20d12542d14345378e2fe2be26",
".git/objects/08/4c73f4589eb8fa1720affa9be5009f120fd188": "20fe44975254d0799d2e0f98b78fcc08",
".git/objects/08/8ba28e838a2103b805a11a23cc4f459735a4d7": "9d3369ecd5bf1c2f8a1bcc823312790f",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/596a4e0d66b145cf89a620e7b763a0b4986226": "7f9652dda62d1cb99474276b97407016",
".git/objects/0d/ad4e92363a19b1cd821b581fa9afdef0c1d886": "e786d2395d6756bde882b4ce3a676c5b",
".git/objects/0d/bf814f6bfae91d750e36049351cb88571d9d4a": "83876a2f9834a0e49ae0ecb8bd320339",
".git/objects/11/1f62618bb5fed9999633b63b8c78f55ec2df1d": "c9ebd481d60c28e08ba313596c7aed17",
".git/objects/11/66d79a8c60ab199b44915fe68438a9a408cf24": "5bbbf4c1c66847159adfb77bba8ab84a",
".git/objects/13/7bdc30182f0003e1210f096b429714c41d56b6": "0db6f90655e7d5e6331833eb6b80d9fd",
".git/objects/13/cd596d130b66354002357dfa2c3d7939031e75": "368daeca1841cc00e61c5a4295f667c9",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/19/08bba1004c59f410f76be6ad6abf4d8120ad6a": "37c09490bb1659172849e8ea7ae86ca1",
".git/objects/1d/1cf027a7e996aaa7d4f1c097d0491e28b51671": "8207a46fb8ad8c78e658bff60b7f4adf",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1d/be72d4c6f2ddfeb82468636c1a1ca92548e113": "ca0b4773cc33cfe0bb69afe9a07a6698",
".git/objects/1e/43881e0c4b7653b1ef61b90dc0614de2286431": "8c75e6842d5bce388d917bf628a2542f",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1e/f8b2944718a62fb976a079da2bd81d810cb87b": "677afbe810aad5e565710d0d7c3240f8",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/1f/6acc680f50b08b770b3ece6d12d90c39d276d7": "759ed068c10f6684fdbebcd179cb2e55",
".git/objects/20/8e0d0d60f54d8f938bd1c28d98eab2c9e7e291": "13659518103811edb3fcba87f68b93cb",
".git/objects/20/acaac93870923f86f6a4adeb0e5e08f9f87796": "4f2c05e23e03ed9d8bb95d3666f14871",
".git/objects/22/c549c142af7e1f01a4309f1698c602a000b83d": "1cedfcce813c33eb03209aa0c0fe68bf",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/c359cabd5c8f1bade3b1c87f5533f718d649cd": "ecef26d4c4788bc313e96163be6c95ac",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/29/061e87de0906c5b5c18e9221e2b0fee70767fb": "025a0b0df0ad35edb7ee5d4e42834f85",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/b1ee22814472425ddbda8c3ba838926a9a9e77": "cdb4b4940c593149b23cd6738533a854",
".git/objects/2e/48c6b1b6f440ede710f5a8038b28822769dd3e": "285bf0622cee60ff541053b664e10787",
".git/objects/31/661db24c66c004deb2d6a796ae9c07cd115c1c": "5b85fc93b31e9d580b11bc54af49a235",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/33/5f3b3448c348098ccd2ab15257440a8f3385a2": "86826faf7ea8532d13fc193aaf7dd8a6",
".git/objects/33/8ac5896d349ab8f24f6a666e935f1064a5dfe4": "abefd551846a1286a53707d9aeb629d0",
".git/objects/34/03874edb6a67f43c39b271cb443996c1750ee7": "a3d6b6befafbf6e60eb89e28df3220e7",
".git/objects/35/5f597cc596b184f29e710983a7fc6dcff1a50b": "4e9fb06aa76534a8333065478027b79a",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/edc77aa24ffa781966a6a6b92691855a5a0ca1": "4541038f42e7f2815470f6a72a55c799",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/38/1aecd9360cd612c399b94b7d5e39785a64e22a": "7cde88ba779a489dbd5333d398402a5e",
".git/objects/3b/2098438aab4ad8b957f9a9d6bea728d1a2cfb2": "bd7180dcccca79a55f8562863918529b",
".git/objects/3b/b0860a0981211a1ab11fced3e6dad7e9bc1834": "3f00fdcdb1bb283f5ce8fd548f00af7b",
".git/objects/3b/bb9a9eec7794570570a76d94310374347c56e5": "2b6060419c31f843e4159d5974fa0c0f",
".git/objects/3c/f5b371c85b7c6d5501701f83e5905320011735": "5bfb962499249cc687f3610f156c5c67",
".git/objects/3e/947a426ecdcd2015b91992be5335954cc94617": "cc905dce9862c5df6b5b08d99c0a209c",
".git/objects/3e/ce63c7422026661bec0197e5a0556aa2630063": "2dcb00a2c17ffb2a420e658f1f9c87ab",
".git/objects/3f/7d1509fdf074f55891d030f631515dfd351ee7": "dd8be375413d783eaf83eed75eed8a6b",
".git/objects/41/8706d3b01ad95e5850c93866eea983adea8856": "3ac976ca89a2208cc646a2bd91e5abb2",
".git/objects/41/93bb365929b1c18514c414659d64dafdc23516": "557e9fd6f27c28e2e337c1bd0a91a4c4",
".git/objects/43/b173b1811edbebfbea5041af9e76fe8d52a1b1": "356632d19eb1d8a9d337a73ab0c70117",
".git/objects/48/00a703440622d1b97a233fe9637e23602daef4": "548d7e1854771e7553fd90a7d58515e4",
".git/objects/48/8c9c6af67c4caeadc777ff9896d64f704bea2f": "704b4fd93b73f85e06b2f5de3fb9bfbd",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/f52c9b046ddc553da8ccc622383f728344b8db": "fe2f4961aa14edcd86073db52e8cc60d",
".git/objects/4e/36123bcf022be2021fc488345a4b42560f2ff9": "18337192d52e8b5ad62a5238395c2c75",
".git/objects/50/78e2cdc39bdcab9d020ac52aafd643b505d6e3": "15bb84cc2ae4ae0a96ad9dcb7f0a1c87",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/53/9dd811dd564b84f05a33d6efa2365f128baf27": "5ba41db343d8584cda2693265110e6a1",
".git/objects/54/9e3b2e2d9d29dd2c44fe9b0814dc3f9c173eb7": "23dc5b4bdb07c41541626e1620d71b71",
".git/objects/54/b8ead0a5f5fb6e8b2866b41e6c7dc0fce7e4f9": "6b3cc4919914066f29702bc0d9657de1",
".git/objects/55/bbd1cee943a165266a43869a7dbd7d48c27137": "40af1c7445f20913526ca44dbfbe8ea0",
".git/objects/56/55ad0916bf764c98390cc7d17db2c82b00486d": "c3b5954ccd1e16b61fd70f241bd93299",
".git/objects/58/0712131535a2d19c48568c15ed611b755a0c1f": "346f085405e7fff1b376640a458bef52",
".git/objects/59/7d3bbdc0040d84fb10ebfc38d0b4a0a0c499d1": "331c8a566dd9711359730d5e2cddbcb7",
".git/objects/5d/c8325dc93ed75c535fdada46a1834e1a6ce201": "fca1d6ff379c15ebfdcf7e1c662fe952",
".git/objects/5e/a9b8146328960455f5b11e6f686267ec71ad0a": "944f7cc91f1557cca7e78da57a8591e2",
".git/objects/5e/b5c24688f8a286f171fd809a793e966fe833e8": "cc3620195efdae9db9e73afc0bdbe4df",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/62/abac66de69a8267219c57876395f11e940402c": "96445181e26f55246c8223e74fcddc49",
".git/objects/66/4c7d06f22b0d56600f7f0343916fbb6440cb25": "e2f2afd01fb8253fa538762a04fe1fc3",
".git/objects/66/e8ee746522b84c071a641ce797d819f9ec9c84": "ace2bf544bf697b40d85f33397ecfa52",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6d/4d622b0db2a6ab92c150308ed667322f402bcc": "1f6eaa9b1b26bc52c565c31d88992c0d",
".git/objects/6e/7b7ff4bb51ed23f215da9e6a266b788f2bb394": "8196bf4653e4a7ca543a86fbee21538e",
".git/objects/6f/9ef2f0d1aec5015b6ea318a962a51f6d68bdd4": "96776f04cba61daf98cc188c106acd47",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/71/704f7b27a307c6f565fe489aed46b9644b7a9b": "a68602e4797ce8381af00fb360952155",
".git/objects/76/736248d515c2a8a4abe1737c9062dac0e612d5": "01e6b1bbfca5fbb13990121e35b358eb",
".git/objects/7a/a206e904230431be148f2d2a1b4bdd8aaa7e0b": "4b93d3434dfa87e5d04d93a81bc1687d",
".git/objects/7b/ac9a555a1167bf08824513ffaaa4cd7bf3eef8": "53e2f38076da9fa71487c21dbf2598e6",
".git/objects/7e/12e9b1e710c3202e4c1d31b03fd60e2b980db3": "5e5894f353c5d5d4c515298cfcd65abf",
".git/objects/80/85eae08f6472800d8761b22df474926081dfe9": "5ee89742c8c6e9ee3d466cc88c77841f",
".git/objects/84/bc1573e3bba23700816945f7385840181306dd": "d02ee5be709b77f58e95740805f5779b",
".git/objects/88/2485c5780daa73ed761cda2a061fdb22a985ad": "8ba2c1144136846c082aa0c47b89868d",
".git/objects/88/3e3c93c5b81caccbe9a26df9f290ef178fd9f7": "96e6ecb80fa9ae96df7cc7522aaec22b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/0ffc1728c84692c0a660c9b86631518d54370f": "9474732f5c45a8c4637b2addac6fcc93",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/7a1aed602a8b20ee16ef7547ee5b4b05931195": "4dcabefc81d7e74d94a376cce682ba2e",
".git/objects/8e/0565336ba814f1b7269b517b9fbce95d35f847": "1eca0fa2e1e1ed20278938eead3f6d00",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/90/c167280179855154caf8ea3e7f9502314bc696": "a2ef9c737a8f4df643d19b22a2c240d0",
".git/objects/93/04ba9593a8179b48d6ba86fc0c5ccb06932474": "dd003968869df8f66448e15bcd3b0a9d",
".git/objects/93/a08bcdd0e5a103e5c2f89a6a2491c1d9a2608f": "316ec510bb3271e0a5c854719583be37",
".git/objects/94/26d9fc7fb89aebce83d18c8643ae06de9eae26": "81d8c2a2f815c23df388fa883b24ac30",
".git/objects/96/2788daa7cf808820eb15cdfc04ab51bdad22bd": "dbb770de523588fa0fc883d5bbe59a69",
".git/objects/96/416d042ecb531df2ac014140e05b9b106c2b74": "2eab1a164d138720f5132f9ba4ca243f",
".git/objects/97/2d8be4e5f1f2950701e45ce4991e257e210062": "876942ce66927114543365431aa6d5d1",
".git/objects/99/981351814e6cf70fabf23307cff2f7284b2865": "60df9d7763850fa8e39c53fd2472e2cc",
".git/objects/99/e777647ca8fcc5b42d2a2b2e79ff01cddd2002": "fde2de885eb320981e08eaffdd7a54e6",
".git/objects/9b/ea1b780e734e332a1f8f042da55aa4d9ba20c7": "64b3e9db23bae9830d24efdf1536138c",
".git/objects/9f/18ba9bdc6b695527dddb14023060b2b0ae15e7": "37a3e4deaa5376c0f06a6ec0906bdbb6",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a4/1761e4f9c63ce277de9565f4b24033a9810a0f": "5f26b5a5c0da07f1c12953984f7a167b",
".git/objects/a4/aa5da8c7f77443cfbc88d6f567efa6eb7b2b3e": "8fab2a32652e04bba35582f961c41238",
".git/objects/a6/abad37ec27c407e6fb53ee9ec75c0fe7f44848": "435333329b5d518b791832c4441bb56b",
".git/objects/a6/e06e2277c285358e9176cbba79e046308b9453": "734c2201e72caf357194e734ff29da88",
".git/objects/a9/1927c99ca8f9bd0170faf8c596a4ed25923655": "884ecfafffac2b1549ddbb159b85de2f",
".git/objects/a9/87a4e7746ac950c0ea0bb96aace82f3f809199": "c923373bb036019902773b74490f2579",
".git/objects/ac/48ab81b4be0a3880285e497ab321fef18e0408": "fdffa560e007fb011f7cfc4898507b86",
".git/objects/ad/54279490a3b95b03f5d1e4537780c3c13a843d": "f62bda394f8733abe9c6075f782674e9",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b3/106f0731dabd1d4b66a262c378849b6ff377da": "621a882b5aa81f49dc3281b1d3f4007d",
".git/objects/b3/5f86662cdd0fddf30a832b72b0fbb8a09704c1": "43079cdce32dde8b6f0b5c8d9913f517",
".git/objects/b5/59df292810b65ce85a7b4aafefe41f37eab3ff": "f8444cd33812e1290b3f6cf027cfdeca",
".git/objects/b6/1639865d970851328c3151713839934a68fbf5": "cbc07a2c0e6911472d0a2507b5f07784",
".git/objects/b6/93cac45bfd8c7be47945aa1f842cd5f920b9db": "5fb871b47dab80fbd3389a63242861af",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3f7822126f751cc911a5902788a45a6261965e": "d37758210606e75b689b747f7f3b5706",
".git/objects/b9/df5f87a2b5082a213dd072425976216cd56118": "15314f1f578acfd9b3e8f2c844a26c45",
".git/objects/ba/c46ebb90e73baf1de8ba391c766758fab506b7": "de54ec9e5f40929b48d34a4135125864",
".git/objects/ba/d0327049568b1073d9879b4d05c53ca2e6734b": "b0ed8851aa851aab8978c8e581271b1e",
".git/objects/ba/d5dcbb2a90ce0c72cf9b7c38b357841e5f1bb5": "dbe280824f8328a634806f38d49f9c06",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/72b8f3f484ddc346cff14225da692ecbcd136c": "1ceb6185b520d82a64386c1543b36ca5",
".git/objects/be/c362e032587f4cdcc7432a0eea143f42b95eaa": "cdc66a7ec6d759394f2b776eeb77b19a",
".git/objects/c0/5e11466635e6ced67a9b487a535ec7ddc5de98": "048527f4c2bb42b81113a3df95d5b0e7",
".git/objects/c4/39c8bf3e8a29af6128e910a8883e62ac7b70b5": "bb25e01216f6814045f974ab127d0206",
".git/objects/c4/cd3d78b9646e2d0a738eca95f44e704ae69338": "d72f0924bf7ed1e19c060f9d36f10856",
".git/objects/c6/869fe3958c2bf585ad8c669a733ba1ab576cd4": "b1a417741e2764feddbd488fedd8fdbf",
".git/objects/c7/7663172ca915a99a594ca17d06f527db05657d": "6335b074b18eb4ebe51f3a2c609a6ecc",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/ca/21bf130464abbeaed8c73fe632fe189b84a5f9": "06ed38f525c7a28c6992b38901fd5764",
".git/objects/cb/623055a1264ec42992278aa5b8adae84e0052b": "9245b6cddec5130ccf575b5cf3bdb29c",
".git/objects/cc/6be782dc4b5c2bf1eb6524d6dfb32ac351b8d3": "de4bd10ba53cd4c957d47d29e378293e",
".git/objects/ce/c00f47f8aa32ce1fa29f82b3e56ed08aa44bc5": "e2e262a3e8faed847c0ada965163054b",
".git/objects/d2/0e59a5fd940a4ae4f8999a152a60db3b2b101c": "fd9367ed2ee40856d36ce6cfaf2d311f",
".git/objects/d2/60e9c4384a107f73928076e5f8d1818a5a80d0": "1108f05b9fd7d37664fdf6c364816e5f",
".git/objects/d3/4098bb93477fd15dd21e2d8acae945ab8b868c": "d3d7f9b92817f9f10f8b4d8475ee9d0a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/ba909198fc0673d123b269f58e01c1138a42c7": "00d745a03deba023c84b87d196e9b3c9",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/bf892458e4d771015740ae8164f7869baf02fa": "5844269c3dd615821bc49c98ee079196",
".git/objects/d9/ecf9f07faf26e9e5dd8839ba2047a921d0405f": "49b94e8fd136f0df29d725d71ade5780",
".git/objects/da/d868781ad8ca5631553cbe4dad0252be3ea4c7": "e108adcb629a0f8813e439e8b9f6872a",
".git/objects/e1/79e212654aebb8e7d3cea3742c9cf314a736ad": "8f6b3ab9ecea71a44ee1f965bfc96b08",
".git/objects/e4/7a58932a0f2bda59a5c2c92503da411bfbd0ba": "bee3e5f3f6819f2b58ba9377a777eb3e",
".git/objects/e5/ab8f755b6bbccc5060a95586ad18e52d1e3cbf": "7906761cb67f2c93c13170ae95d16f30",
".git/objects/e7/2b8f1cdd132ddb7789e3022b767e635ed60d55": "29677166c216643f60e4b70d883e74e0",
".git/objects/ea/bf51207e9d0e46b91caced1edf2101a85f4ade": "f81220b69595c81a9b320f5d7b48a1c0",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c22bcffdecd549571eed59fd23593f279656bf": "6280375a987e31c221c992cd142dd9ef",
".git/objects/f0/0f92708bcee50fbd8902576b483784348f3429": "9ca6245b0f4493d1c39f9f7b0852478b",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f2/f496fe9d8d4443745cca12c886678ae1b49360": "311084b093ed8a5b0324a28c6e9259fb",
".git/objects/f3/3eb591ca40c3eefe77f94dd0f2d5fb89bb4c5b": "41adfbe72cefa702ad0ca036ac15e7d7",
".git/objects/f4/6d7e5a1342d9f607eaa076bd934cb7273084bc": "1a60fc2769bbde13a0f5c02f4bce4ec4",
".git/objects/f5/3d04e9c6a335fd7bc71170b26c15b01b9f916a": "8dc7a4f9c883c0e6dfbf2d47767dfdc1",
".git/objects/f6/593f87722844d1a07f72ee3f3c7ec5297491ac": "ef154beadfb677f489364be28ea2d35c",
".git/objects/f6/9cccacf3a47ea3b76d36dbd233c674dcd29c11": "10c78f5a21ee18d6b3e37adf5043555c",
".git/objects/fb/df4a54c874af8913e3afd5723db3d6fdcbe9a3": "1051ac647d5f8aa06310d7d9cf9a030a",
".git/objects/fc/b4659a4bb904991e0461cb67a1d33e93660868": "a63fc6479e9423093bc68705fe614489",
".git/objects/fc/f3fe4138e8ee4be86ba65bbc96b30396fafe64": "c44d690ce37644623357c22cd913ec04",
".git/objects/fe/45f2a1a45732759890e67285b410ea46a99e7e": "befb9f549d23b585cff4c0cab3d04377",
".git/objects/ff/b494162432031b83b465a34fc67406f30f9e53": "78070e8507276332654223b83163058a",
".git/refs/heads/master": "fccc2aaa0062b801bc8e15afb114cb22",
".git/refs/remotes/origin/master": "4be8f2d5e7eed05ece27fa92c6ff7835",
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
"index.html": "f8f752e3715f427e646a012e70135aa0",
"/": "f8f752e3715f427e646a012e70135aa0",
"main.dart.js": "8cea3dcef7322515554ef654c36fc0d1",
"manifest.json": "8832dcc9a4a4777e7edb874c559345df",
"version.json": "5d2c4ea0d796b099aba01ff5c784cb2a"};
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
