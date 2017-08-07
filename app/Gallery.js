import React from 'react'
import { NavLink } from 'react-router-dom'
let brand = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/brand.png?alt=media&token=8c719b95-25d2-4ed3-9088-949f7f7a0fda'
import Gallery from 'react-grid-gallery'

  let gallery1 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery1.jpg?alt=media&token=569a5d3d-91a4-4f42-91c3-cee6e66ba997'
  let gallery2 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery2.jpg?alt=media&token=5578e19e-3020-47ad-ad83-1886a4738273'
  let gallery3 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery3.jpg?alt=media&token=5d41f05a-4a60-4802-a276-f9a6a3720834'
  let gallery4 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery4.jpg?alt=media&token=edc6efa9-7e6e-441e-a22a-9cc1b97f3c8c'
  let gallery5 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery5.jpg?alt=media&token=5e786e90-87f0-4adb-8c52-b092fad59fe2'
  let gallery6 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery6.jpg?alt=media&token=aa1e42cb-74ca-4a32-b8cd-4df7b21c4d13'
  let gallery7 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery7.jpg?alt=media&token=b018a537-884f-49e9-a2ad-7075863b36fc'
  let gallery8 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery8.jpg?alt=media&token=49ee7fd0-ec07-404a-939a-4e7044619209'
  let gallery9 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery9.jpg?alt=media&token=fa5d4927-1dbb-40ba-b0e6-c5701bb8d253'
  let gallery10 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery10.jpg?alt=media&token=9e782124-25a7-4a55-a877-85efb39f603b'
  let gallery11 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery11.jpg?alt=media&token=63f92dfb-b979-4034-9ed9-6730b228e3f8'
  let gallery12 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery12.jpg?alt=media&token=590d3bb0-8224-470a-ac08-b897b4d16bc0'
  let gallery13 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery13.jpg?alt=media&token=dc7bd6b4-5512-4d1f-97a3-cd6f535ec45e'
  let gallery14 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery14.jpg?alt=media&token=4d9347be-3cb7-4b46-b5db-c613dd4019bb'
  let gallery15 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery15.jpg?alt=media&token=b2400a47-041f-496a-94c1-3211be3c8719'
  let gallery16 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery15.jpg?alt=media&token=b2400a47-041f-496a-94c1-3211be3c8719'
  let gallery17 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery17.jpg?alt=media&token=dbd9f324-ba08-4bbd-a523-f70b4d4140ae'
  let gallery18 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery18.jpg?alt=media&token=5ed6e105-d995-4472-abfb-219b0946a9a5'
  let gallery19 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery19.jpg?alt=media&token=754a8a3d-7d8a-4f5d-9712-39f502e6e6be'
  let gallery20 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery20.jpg?alt=media&token=6d775b39-0178-440e-94ec-b60a72de50ee'
  let gallery21 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery21.jpg?alt=media&token=ca3b3bfe-5cd7-49ee-9c51-4a38917ebe94'
  let gallery22 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery22.jpg?alt=media&token=9f2b5a59-0fb3-4816-8fb9-b5eb4912dcf1'
  let gallery23 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery23.jpg?alt=media&token=1f9f4a2d-9585-491b-a7dd-eb8bfebe47d6'
  let gallery24 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery24.jpg?alt=media&token=4d61b8fb-c208-469c-b04d-a68568e49bf6'
  let gallery25 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery25.jpg?alt=media&token=9953369d-e70a-4a3d-aee9-5e162ed753bb'
  let gallery26 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery26.jpg?alt=media&token=4a8c56a6-1f7d-4c01-b75c-f887a5b602d4'
  let gallery27 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery27.jpg?alt=media&token=153f49be-d449-45a3-8cd2-2812d51751bd'
  let gallery28 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery28.jpg?alt=media&token=6198d724-e758-4131-afea-9ad97fa81583'
  let gallery29 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery28.jpg?alt=media&token=6198d724-e758-4131-afea-9ad97fa81583'
  let gallery30 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery30.jpg?alt=media&token=d6e7090f-3c3e-487e-b66d-9ec02ac93444'
  let gallery31 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery31.jpg?alt=media&token=417a51d6-0269-4054-a475-992f6f210e2e'
  let gallery32 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery32.jpg?alt=media&token=2dd57b61-dfce-4bda-9cd3-9cbdbcfa0b40'
  let gallery33 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery33.jpg?alt=media&token=111060fc-0e16-49c1-a402-0f5e9a6664f5'
  let gallery34 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery34.jpg?alt=media&token=d2300ea0-0e00-40a9-b23a-e337db132387'
  let gallery35 = 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery35.jpg?alt=media&token=52ffc4bb-65f2-43c1-ab0a-33c862a5e803'


const IMAGES =
  [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery1.jpg?alt=media&token=569a5d3d-91a4-4f42-91c3-cee6e66ba997',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery1.jpg?alt=media&token=569a5d3d-91a4-4f42-91c3-cee6e66ba997',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery2.jpg?alt=media&token=5578e19e-3020-47ad-ad83-1886a4738273',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery2.jpg?alt=media&token=5578e19e-3020-47ad-ad83-1886a4738273',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery3.jpg?alt=media&token=5d41f05a-4a60-4802-a276-f9a6a3720834',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery3.jpg?alt=media&token=5d41f05a-4a60-4802-a276-f9a6a3720834',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery4.jpg?alt=media&token=edc6efa9-7e6e-441e-a22a-9cc1b97f3c8c',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery4.jpg?alt=media&token=edc6efa9-7e6e-441e-a22a-9cc1b97f3c8c',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery5.jpg?alt=media&token=5e786e90-87f0-4adb-8c52-b092fad59fe2',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery5.jpg?alt=media&token=5e786e90-87f0-4adb-8c52-b092fad59fe2',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery6.jpg?alt=media&token=aa1e42cb-74ca-4a32-b8cd-4df7b21c4d13',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery6.jpg?alt=media&token=aa1e42cb-74ca-4a32-b8cd-4df7b21c4d13',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery7.jpg?alt=media&token=b018a537-884f-49e9-a2ad-7075863b36fc',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery7.jpg?alt=media&token=b018a537-884f-49e9-a2ad-7075863b36fc',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery8.jpg?alt=media&token=49ee7fd0-ec07-404a-939a-4e7044619209',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery8.jpg?alt=media&token=49ee7fd0-ec07-404a-939a-4e7044619209',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery9.jpg?alt=media&token=fa5d4927-1dbb-40ba-b0e6-c5701bb8d253',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery9.jpg?alt=media&token=fa5d4927-1dbb-40ba-b0e6-c5701bb8d253',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery10.jpg?alt=media&token=9e782124-25a7-4a55-a877-85efb39f603b',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery10.jpg?alt=media&token=9e782124-25a7-4a55-a877-85efb39f603b',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery11.jpg?alt=media&token=63f92dfb-b979-4034-9ed9-6730b228e3f8',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery11.jpg?alt=media&token=63f92dfb-b979-4034-9ed9-6730b228e3f8',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery12.jpg?alt=media&token=590d3bb0-8224-470a-ac08-b897b4d16bc0',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery12.jpg?alt=media&token=590d3bb0-8224-470a-ac08-b897b4d16bc0',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery13.jpg?alt=media&token=dc7bd6b4-5512-4d1f-97a3-cd6f535ec45e',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery13.jpg?alt=media&token=dc7bd6b4-5512-4d1f-97a3-cd6f535ec45e',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery14.jpg?alt=media&token=4d9347be-3cb7-4b46-b5db-c613dd4019bb',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery14.jpg?alt=media&token=4d9347be-3cb7-4b46-b5db-c613dd4019bb',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery15.jpg?alt=media&token=b2400a47-041f-496a-94c1-3211be3c8719',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery15.jpg?alt=media&token=b2400a47-041f-496a-94c1-3211be3c8719',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery15.jpg?alt=media&token=b2400a47-041f-496a-94c1-3211be3c8719',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery15.jpg?alt=media&token=b2400a47-041f-496a-94c1-3211be3c8719',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery17.jpg?alt=media&token=dbd9f324-ba08-4bbd-a523-f70b4d4140ae',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery17.jpg?alt=media&token=dbd9f324-ba08-4bbd-a523-f70b4d4140ae',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery18.jpg?alt=media&token=5ed6e105-d995-4472-abfb-219b0946a9a5',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery18.jpg?alt=media&token=5ed6e105-d995-4472-abfb-219b0946a9a5',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery19.jpg?alt=media&token=754a8a3d-7d8a-4f5d-9712-39f502e6e6be',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery19.jpg?alt=media&token=754a8a3d-7d8a-4f5d-9712-39f502e6e6be',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery20.jpg?alt=media&token=6d775b39-0178-440e-94ec-b60a72de50ee',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery20.jpg?alt=media&token=6d775b39-0178-440e-94ec-b60a72de50ee',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery21.jpg?alt=media&token=ca3b3bfe-5cd7-49ee-9c51-4a38917ebe94',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery21.jpg?alt=media&token=ca3b3bfe-5cd7-49ee-9c51-4a38917ebe94',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery22.jpg?alt=media&token=9f2b5a59-0fb3-4816-8fb9-b5eb4912dcf1',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery22.jpg?alt=media&token=9f2b5a59-0fb3-4816-8fb9-b5eb4912dcf1',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery23.jpg?alt=media&token=1f9f4a2d-9585-491b-a7dd-eb8bfebe47d6',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery23.jpg?alt=media&token=1f9f4a2d-9585-491b-a7dd-eb8bfebe47d6',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery24.jpg?alt=media&token=4d61b8fb-c208-469c-b04d-a68568e49bf6',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery24.jpg?alt=media&token=4d61b8fb-c208-469c-b04d-a68568e49bf6',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery25.jpg?alt=media&token=9953369d-e70a-4a3d-aee9-5e162ed753bb',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery25.jpg?alt=media&token=9953369d-e70a-4a3d-aee9-5e162ed753bb',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery26.jpg?alt=media&token=4a8c56a6-1f7d-4c01-b75c-f887a5b602d4',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery26.jpg?alt=media&token=4a8c56a6-1f7d-4c01-b75c-f887a5b602d4',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery27.jpg?alt=media&token=153f49be-d449-45a3-8cd2-2812d51751bd',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery27.jpg?alt=media&token=153f49be-d449-45a3-8cd2-2812d51751bd',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery28.jpg?alt=media&token=6198d724-e758-4131-afea-9ad97fa81583',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery28.jpg?alt=media&token=6198d724-e758-4131-afea-9ad97fa81583',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery28.jpg?alt=media&token=6198d724-e758-4131-afea-9ad97fa81583',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery28.jpg?alt=media&token=6198d724-e758-4131-afea-9ad97fa81583',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery30.jpg?alt=media&token=d6e7090f-3c3e-487e-b66d-9ec02ac93444',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery30.jpg?alt=media&token=d6e7090f-3c3e-487e-b66d-9ec02ac93444',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery31.jpg?alt=media&token=417a51d6-0269-4054-a475-992f6f210e2e',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery31.jpg?alt=media&token=417a51d6-0269-4054-a475-992f6f210e2e',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery32.jpg?alt=media&token=2dd57b61-dfce-4bda-9cd3-9cbdbcfa0b40',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery32.jpg?alt=media&token=2dd57b61-dfce-4bda-9cd3-9cbdbcfa0b40',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery33.jpg?alt=media&token=111060fc-0e16-49c1-a402-0f5e9a6664f5',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery33.jpg?alt=media&token=111060fc-0e16-49c1-a402-0f5e9a6664f5',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery34.jpg?alt=media&token=d2300ea0-0e00-40a9-b23a-e337db132387',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery34.jpg?alt=media&token=d2300ea0-0e00-40a9-b23a-e337db132387',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery35.jpg?alt=media&token=52ffc4bb-65f2-43c1-ab0a-33c862a5e803',
      thumbnail: 'https://firebasestorage.googleapis.com/v0/b/pizza-f23b6.appspot.com/o/gallery35.jpg?alt=media&token=52ffc4bb-65f2-43c1-ab0a-33c862a5e803',
      thumbnailWidth: 900,
      thumbnailHeight: 900,
    },
  ]



export class GalleryCarousel extends React.Component {

  render() {
    return (

      <div className='home-container'>

        <NavLink to='/' style={{marginTop: 80}}>
          <img src={brand} alt={'img for brand'} />
        </NavLink>

        <div>
          <img src={this.IMAGES} />
          <Gallery images={IMAGES}  backdropClosesModal={true} />
        </div>

      </div>
    )
  }
}
