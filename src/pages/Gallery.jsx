import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const categories = ['All', 'Rooms', 'Property', 'Local Area'];

const images = [
  // Your image data here (unchanged)
  {
    id: 1,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640778.webp?k=c6f1beaf1e92527b496a2d45e799a33bb4b3224168aa76f3296674aea723bbe9&o=',
    category: 'Rooms',
    title: 'Deluxe Room',
  },
  {
    id: 2,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640623.webp?k=758ad0bfc397bc66df689ff7cd55d0623f54e8e3eddccc3b311b139d9dedca99&o=',
    category: 'Rooms',
    title: 'Bath Room',
  },
  {
    id: 3,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640767.webp?k=35f0a637442e6393db8c898ab0fd7a4f7ee9f73e5db6785fecd5b8848c2857b3&o=',
    category: 'Rooms',
    title: 'Deluxe Room',
  },
  {
    id: 4,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640684.webp?k=547d88a2520f714d7cd52922445757e6e2bc182f1743e033fa060d58541749b8&o=',
    category: 'Rooms',
    title: 'Deluxe Room',
  },
  {
    id: 5,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640634.webp?k=1682c5cf43162496b320946dfdfdc1567b855e4b12a3e1f62b2b9b10231c15dd&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom With Fan',
  },
  {
    id: 6,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640692.webp?k=68944130e68c158470979f4f09dd3e0e21e750680374b807fd35ddc9c7b028c4&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom With Fan',
  },
  {
    id: 7,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640746.webp?k=241a44aab63830120c2f7e1028b46ec40257cd1dcd526b92c818cb7bf4df154b&o=',
    category: 'Rooms',
    title: 'Bath Room',
  },
  {
    id: 8,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640642.webp?k=a9e7322d63d70ecdf05465a131023c42bb5bfaddacc4a5fdd480395ebecb5c88&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom',
  },
  {
    id: 9,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640653.webp?k=d927db0e2ae08fa8835c3562d669d04e0e4d9c45587231ace11bc8a690aa9afc&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom',
  },
  {
    id: 10,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640723.webp?k=b0a7b80c19f91d005edd810af7f900fa72621e261281472e957e57374878c3b3&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom',
  },
  {
    id: 11,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640785.webp?k=84e9766004813e54ba02a9b3f4a8c1401ae4a91e1ca8eca1545ebfd9a4a1272e&o=',
    category: 'Rooms',
    title: 'Standard Double Bedroom',
  },
  {
    id: 12,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501725527.jpg?k=c6b14d9e7c8e90d23c7565f0a21d4ca7bde31f97861946312a123b755cb02da4&o=&hp=1',
    category: 'Property',
    title: 'Breakfest',
  },
  {
    id: 13,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501724509.jpg?k=4d03017deab5ec96bd57ff295862820302f3dc028df19441feabda41167d557b&o=&hp=1',
    category: 'Property',
    title: 'Front Side of Hotel',
  },
  {
    id: 14,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501724206.jpg?k=e4251763e837ac92dba3571fdc6e6baa4b45bfdb3a0043dd515d8e72528115c3&o=&hp=1',
    category: 'Property',
    title: 'Dining Area of Hotel',
  },
  {
    id: 15,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640702.jpg?k=6bac1d9e220489294dcefed5c584d3a8809c252c46d9deae84920e6979607277&o=&hp=1',
    category: 'Property',
    title: 'One of The View',
  },
  {
    id: 16,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501724213.jpg?k=44a62df8a838bb29200d681452bcd92933d888419d262c383d61160df315d570&o=&hp=1',
    category: 'Property',
    title: 'Kitchen',
  },
  {
    id: 17,
    url: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/501640822.jpg?k=05b91d830df5ef50ff696899d7af068cc0b93eb5eff935a23fc0c34110084dc9&o=&hp=1',
    category: 'Property',
    title: 'Interior',
  },
  {
    id: 18,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/458546958_1918961091937595_6938618101135619997_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeE-enW_WjkHk49llSsKlPOasf1JVaEaX_Ox_UlVoRpf854XkQF5IG7l5bkFOJTMoS-YfQhnqdWUhkhiF3KyB4aG&_nc_ohc=StNlknFvVCEQ7kNvgFv079S&_nc_oc=Adh5XNHQueEoeQ3emuvsr8mk8KajUtMuSikOiT4nymtyB-bWUmWrZS9BORU-dvIfR4w&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AbVTqFCiTZGzh6-l5NFkE4L&oh=00_AYCwNvVsXbbERkVrQyVIQJnFKy2arXLRBUJKGbf_YgfqdA&oe=67A37BF9',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 19,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/458984648_1920440208456350_3713276220530292371_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHmEhRdHmhGpkAoIoS5NA9VtPB_emHvFlW08H96Ye8WVeCinBrD25bQxMNYOOP2DfYPBDDcPm9-3sIhom5Zvfaa&_nc_ohc=Gjm3MCXF-pwQ7kNvgG38ovd&_nc_oc=AdjFuaynUsHnyYwQh9Ltd47Rt3GUzboEPDujY_5NrMTthSM8oxAng74qw72867Z3IIg&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=ADqEvl88nIZvmNg1KguagdF&oh=00_AYAF3EKyqRvTEuFd3bB-Rc1ZsRRiCvFXhiVVjhIOwsWSAg&oe=67A39519',
    category: 'Property',
    title: 'Lunch',
  },
  {
    id: 20,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/458545526_1918961001937604_1033377085332303907_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEsEW5wrx2dXdll1IXTwrBBZfKsTVJOHJtl8qxNUk4cm2wahH3ZNUTCX0S3TPnbxtr_WqwEwvCNtzkLvGec7svk&_nc_ohc=Cab1DfaN-lEQ7kNvgEKuNox&_nc_oc=AdjrwhIXdHbrkGW3g--mkhB3OJEPGtdKX4c0_JufE-cpHZ-gLvs0SRFow2gHs7Tnqeo&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AJXd7ghxC9xvCRF2hZB0hl4&oh=00_AYBgxx1t431sxSLyw8pW5SsomgRJrA0HwTNHvs2icGkjWw&oe=67A3A469',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 21,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/473594549_2019314938568876_1429891312422521631_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEULBjC6WFuTqXh8_HE76t9DesokY_uP2cN6yiRj-4_Z2HXN5t82DCHRa0yd9yC-jkDTpteksIOefG1Hnu72Iph&_nc_ohc=E6g7C7Hm65YQ7kNvgGkjeY4&_nc_oc=Adi4svOxhIQvepme9EXkA-aOsIxUhZJ8_HlX0Pp1MnKLaCMzUeJUrbvq-yuk73Lv1D8&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AFfHcwyDfefS8OSVrpWJyz6&oh=00_AYAYffAAIwpmxs9O_N-tyGYE1X45ZWZBj7yY3y9-n33q5A&oe=67A3B04B',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 22,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/472827696_2013163965850640_6342235893093172107_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG7wGESvpSY0ce5h5Hn6u_nYcbTyzVWBwZhxtPLNVYHBq55yPOcQKC2BW37bKJBUrVQzohYeZPXYgeUBhAzfRgw&_nc_ohc=owzy3713FtUQ7kNvgFqJdTJ&_nc_oc=AdipmqSfsMB_FjQz7T_pI-yd1FlpSVWOIIMH50YGq6hHTNZ4agL1vQRYpvDQ5TonLXQ&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AozEmUlkhr96az7UroH9arE&oh=00_AYB5rzwWOhTrNx5QxNzOqt8xUcXexlDlPmSquxNqgo6RvQ&oe=67A38B69',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 23,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/472841870_2010288322804871_5307839299217284943_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEfvisJnSxB-bUgvMCI2IdQEr0pM-yZqScSvSkz7JmpJ_CNyopbgs1p0OBkHhxM-PETqxRxK_x3gaHCRHZ14SFO&_nc_ohc=L_QlE97TOzgQ7kNvgGQMSwK&_nc_oc=AdgchICsNfBMjFjtXJ6hwn1Pq_z-kkXIZpTdV3kNJeE2opKHFS9k4-h17ok8I0SoL68&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Aqy-UbkSByco5CSJnkhrjQ4&oh=00_AYC28N1z2wayhLJvg6b4YaP8fV4pmqsVWahyxFXgyoLTyw&oe=67A3A2BF',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 24,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/470221004_1994134094420294_4208442915202791245_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHIRbw8jweXvXRCkXzHgh4RsMgfBoGxwQOwyB8GgbHBA39_Ea3TvwLt-31oOQglZjTIlwKMqllu0N0rE_QynCWh&_nc_ohc=1DOSan16EFsQ7kNvgEevmHN&_nc_oc=AdgAyEFReWpbejAyyoijWg-f_7ovsBlKU4q1SgsEp76iBnhUmgO4vqg6b-K4-e8_yH4&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Ag-yuK38N2LYXNAaUa1kC8U&oh=00_AYAZVZxveM_F3ev6Dq_B7fi96wyQtbgYSidmDxXHofFTcA&oe=67A3B086',
    category: 'Property',
    title: 'Front garden of hotel',
  },
  {
    id: 25,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/469325023_1987833441717026_3024487875070361516_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFg5H5F9XKZ18V0KmR1iZtRVEigfwzIt0JUSKB_DMi3QsGf7gjijjPHAE-IiTMzWhTYJuQzXt0qi8DlUdf6JdYz&_nc_ohc=ZuCqh2Dt3F0Q7kNvgGrRD3H&_nc_oc=AdgIvmw_lgXYPswe2pSdkouAXiQFEOKWwfBXzuqC8dSEgidf4_G97uIUyOOcZtziBXc&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=Acpm3VJoTJOVx8iBDbzttxc&oh=00_AYBPFI38_tmX43pWMI4tGSBeRU4iYmzb8BiTVUduvJ-8aQ&oe=67A38B70',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 26,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/469197388_1987832971717073_4430795320795461187_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHEI7_8bB-4nSH3k-T__JXtqh_UFJyQesGqH9QUnJB6wYAofj6PkHVONK3aLGpY1SUiQaQe3B8RVsSCU5p-cCQa&_nc_ohc=oMmj1uJXqV8Q7kNvgHnmfaG&_nc_oc=AdgdtEILrNaBt6tdI_w0saNbj0LnulU0115Ervrwg_wS5Z6zcnfuba9QsHivU1EP4As&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=ABopn1ac6AAIjOTgf1RcAOJ&oh=00_AYC2RFJirGlthipgGbakwXLWBknLrkP22w_N7s40KSuWwQ&oe=67A389A1',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 27,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/469197377_1987832908383746_3919097876664167801_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFCWhMZIITQpgL2aC-lbYa5x9KxF3eNRInH0rEXd41EiRYLCcj0P4bUIc4nbfjPP9smZqJ1Ig3mEctVu_Etir8c&_nc_ohc=-an1L0e0zmoQ7kNvgFz8IEU&_nc_oc=AdhaVtube4YKqGFAsoJ1IGGNkcsES4urTFxsoWyyG_vOiovt3LBTyMLIkes9uM0mlwM&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AspMDu43DdPSxE2-Yl_aZ3M&oh=00_AYAiEy2eWkR2smuPF4muxcrTf-WJHT6SFFbUSli_bODVhQ&oe=67A3810C',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 28,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/469299994_1987832795050424_625641701870871680_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEdxlp4QRTv-me-9oQSOlpKbaI5iGrS7NVtojmIatLs1W50F-9DWBtdYJkOfg-7NVO3awuEW9bd9CMgNrTnk9i6&_nc_ohc=eCHQTFyuQsEQ7kNvgGpS5LY&_nc_oc=AdgCmldzCdvuvztaQ6HIWpoCurt8jWLtqa82V7HOR10jugD1y3xjQIcyaBgrux-ALpg&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AA9qwviFXAnO_nMzJuZf6N9&oh=00_AYDvZOSQFKuMRXvlwANwjwn7nr-yhcLwjTna6k9xGGQxkg&oe=67A38CA2',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 29,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/467871855_1978470042653366_7253788142857385445_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG38pQF3RGED0Yizk5RmYOAZ3rOYIN8zk9nes5gg3zOT_qCPh2IHIGn-TuFGZvp3Ky5scFUqxhNHxz2fnjYebv5&_nc_ohc=Odt6MF2aXqQQ7kNvgFSy6QJ&_nc_oc=Adh4xQOgASfm6yMKpCZMfoTFABl3EfBda-VckccnGuZDNYA8CkqjYgv9gYjETedlbPY&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AdICweK91d82LjGlO8x3s8N&oh=00_AYCVLKoyFXqukElCDRHl11GgnaxYRYvZYQzTvsAp-ujGoA&oe=67A39F7A',
    category: 'Property',
    title: 'Dinner with guest',
  },
  {
    id: 30,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/467597466_1977080606125643_7883581580364151032_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEVjrpEL_wZWIQZLpQ1HCN7MwRVyEjAr_czBFXISMCv94nKbG17_0OhUHtkN1-wNZkXnPuecKCSahxpmLnNLQcv&_nc_ohc=HRhYznvBRAsQ7kNvgG03Gca&_nc_oc=AdgBL36CmF-HYRXZjA4jsWKmBvv-aMOIsgOwuk2IayfiA8Z8nPMIdfnMPBPQYgBZwmY&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=ANM2qHAvZ2Xgvk92rCwWYJI&oh=00_AYAh6HUs2HYmKA3wzB-Z1AUx3MGjtJVkam_wqVMaunJZYg&oe=67A3B53F',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 31,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/467461991_1976465326187171_1771319244734145516_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF7DO3lqySwZaCD9okkjkKeVkJEIWK3L5pWQkQhYrcvmorJDPU8NAdVfy0t9SgqmwaORQq9FGBsh_QDnghSHPrN&_nc_ohc=pfYa0R2ZLesQ7kNvgGOg8EH&_nc_oc=AdiDhUxuWPkCCWO8lcQtIBktCKUuvJgiBPzEHHa2yZ3oq5kZPMqxAaKFNUpIQFqFC1U&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AWsGh_cwyt0iQ_s5RcBINaR&oh=00_AYASPniJwt_ck__vJgClRzVA_Tvni6GJP_u2Oe72_vKVuA&oe=67A3AB62',
    category: 'Local Area',
    title: 'Beach',
  },
  {
    id: 32,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/464946531_1962293507604353_5098959010413601254_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHeFbvw4n9PQqBDPOIQQckD0zB073smeCvTMHTveyZ4K0sg-1U1LZOzwj_YN21YnzswZ_M6wgJ69h1QrDKEhmlK&_nc_ohc=YpDdALzYCmkQ7kNvgF1wTIf&_nc_oc=AdjrhUAUW9xV-9SBH2qU91AAeJuCBpZ8p9hdOTQQ5JaLsGNPN9csZTEJcr8HlszJgSI&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=A20aIIKCPlAO0KGIUgCWUil&oh=00_AYCgRBGZBnT4aXmZQm_acZ0IpS3v5a-NUSxYJ4zXEUVuFw&oe=67A37F5A',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 33,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/463457035_1954325705067800_5739286875113103400_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGcXIeePEOYqsWFeOpRaPkyhK2UMCL7J9iErZQwIvsn2PfNSQ7_MyXYc8bSRcKBm1vepVhyEEXMuvhLn1XqT7oj&_nc_ohc=9cMQKynDEeQQ7kNvgHphJnq&_nc_oc=AdjEwzS9C9tdol7HkNcOk3FYl76d8KURbugvz_b7h9jVv3or3jmTmXuusFekvyRov_g&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AY190A3UUtaP2_PvGNvsFSC&oh=00_AYDIcTPm1afd6zpPE4yZ5ESGanYd5UxYvqU6A7_HmkpKfA&oe=67A3A595',
    category: 'Local Area',
    title: 'End of The Tour',
  },
  {
    id: 34,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/463386594_1952729838560720_4098815796275451205_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGJgCx3jkXJ7QVd9cUJBQkRIR7hcEEoghkhHuFwQSiCGeLrAyJjATpsB4MMOmh3HgntRXSu-8oYJKihlwYOHBYt&_nc_ohc=drhSQ3X-jR0Q7kNvgGjAyPh&_nc_oc=Adhe0hl3dArq6GduuOBQzS14_lAg4SKdmfaTATIzzQ2EnfHYVnk9pcJTsmYfvcADfdU&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AwiCRzqwfw-2wgvxWSYQJaG&oh=00_AYCXpOTXdf_vv0KyRPeAxRkOfMXUHO1REbF7uccLt0NLXQ&oe=67A3AEA4',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 35,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/462706095_1947361729097531_940370981723087662_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHGUMgQk-LMj6kG7KNS1OlWjnz3v_uueN-OfPe_-65438Gh9FT76_Lf35axKNnhrOaa2AgZsWFG1n50MENH2WYg&_nc_ohc=IEVUOPNlwV8Q7kNvgGMjL7C&_nc_oc=AdjvxbM0UVfCbl-8y4zj0pkBKOo-VuveELLcDADHVyysZf9tYEn35pqIZeekWWmOiGg&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=ApN-XrxCv2mkxCY9IL7ECj9&oh=00_AYDF7dOfqzkUYWzbB8Q8A8eUwGPAjUDHaeCvD5qT9mXB8g&oe=67A3A004',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 36,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/462596209_1947361185764252_622245230624016037_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=104&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFNo8fpLuUcCDNpLiwRLPKHWym8nt6EFZFbKbye3oQVkeZvD0uX-E5v4IGPdFO2o_mK3uYbOiYK4FRgHr2fBjec&_nc_ohc=o1SkNPHE3YwQ7kNvgEgMBTf&_nc_oc=Adi1GC95_r-wj6CISo88S_S1XJDxwX8ncBEgn__0vhj0g7BZXapK8t-xGrCUNY_33QA&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AOT66Yc_HJxHvNj7VEmbYqr&oh=00_AYD1etf1ue6rlkYn_puPe874fRHZHXYSYxjmzuxYQEeqGA&oe=67A3882A',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 37,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/459889685_1924893778010993_3922516194316533951_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFl9sRd6AAkQ07XNaHn7YnIL3bG0om5TckvdsbSiblNyV6x0C0Eqj2Al8tQ4Q6CISUDcm17m4fJZuaHLKzwr_pe&_nc_ohc=8mhtmulSNrwQ7kNvgEp2cYo&_nc_oc=AdjeK4OKnSjZa8DylLjW4LohcPj59r2AHGLCaTLYxrrPtIuS8q8V5XPbn3i5vdPiBZY&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=A7iTA1X9KTVg-I2NdCYLUox&oh=00_AYBFRzjQf5waaslQ76hDXIUidNRdGOKF2qcAXpVsy7iKLw&oe=67A3AD62',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 38,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/456597141_1909828346184203_2113412207926115483_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEtaIf26ZFc_L9KYnwrUGYB-zFd6a50hYH7MV3prnSFgaMDiBik21I2ei7VCyBQMxv5MEurfwAEwLRoRJ9M42qr&_nc_ohc=fyq3_SESgo0Q7kNvgGw9ObT&_nc_oc=AdgqEfWjkyln_Qy78uDOpSdpkKuHMp2yX2_Wj0dtbpxXiL07o-abUu9Q1EFjSNXkj6s&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=AYQQx-dnuDgCDsKiFc0Cj8R&oh=00_AYAXj4UoEt3vzYgPox6ALbzOeP5zWi1qhlOlDRWxsMx6xg&oe=67A384F8',
    category: 'Local Area',
    title: 'Tour',
  },
  {
    id: 39,
    url: 'https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/455857623_1906507323182972_7059381001895387518_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHTjoEqA-IEAXgpxfvQtaIDw5eSL_auyADDl5Iv9q7IAKt83CDCxVELEknAW1qpcTIy6_Kfk-25TjxsXRZ8LaFV&_nc_ohc=isGWDM91YEcQ7kNvgEFVoTX&_nc_oc=AdhZp_qiSJsYlq0au8RyWmfGurlqmUjREnod-R--f1X2DsGGlr8qozaLNWhgN727LGI&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=A1jgExpW5RRnsomO-TR2mbO&oh=00_AYCSlqp2HxmBaExOmeSWgUihrJXNq_7xU5AnW-6bDzxmKA&oe=67A3A9C9',
    category: 'Local Area',
    title: 'Tour',
  },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  // Filter images based on selected category
  const filteredImages = selectedCategory === 'All'
    ? images
    : images.filter(img => img.category === selectedCategory);

  return (
    <section className="py-20">
      <div className="container">
        {/* Hero Section */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our beautiful property through our carefully curated photo gallery.
          </p>
        </header>

        {/* Category Filter */}
        <nav className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-lg p-1">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-lg transition-colors ${
                  selectedCategory === category
                    ? 'bg-white shadow-sm'
                    : 'hover:bg-white/50'
                }`}
                aria-label={`Filter by ${category}`}
              >
                {category}
              </button>
            ))}
          </div>
        </nav>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image) => (
            <motion.figure
              key={image.id}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative group cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover rounded-lg"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <figcaption className="text-white text-center">
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-sm">{image.category}</p>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              key={selectedImage.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="max-w-full max-h-[90vh] object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-center">
                <h3 className="text-xl font-bold">{selectedImage.title}</h3>
                <p className="text-sm">{selectedImage.category}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}