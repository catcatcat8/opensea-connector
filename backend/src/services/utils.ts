const infoURL = 'https://core-api.prod.blur.io/v1/collections/digidaigaku'
const collectionsInfo =
  'https://core-api.prod.blur.io/v1/collections/?filters=%7B%22sort%22%3A%22VOLUME_ONE_DAY%22%2C%22order%22%3A%22DESC%22%7D'
const everyThingAboutCollection =
  'https://core-api.prod.blur.io/v1/charts/everything?collectionId=0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d&spanMs=86400000&intervalMs=300000'

import puppeteer from 'puppeteer'

export async function getCollectionsInfo() {
  try {
    const browser = await puppeteer.launch()
    const [page] = await browser.pages()

    page.setExtraHTTPHeaders({
      authority: 'core-api.prod.blur.io',
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'ru-RU,ru;q=0.9,en-RU;q=0.8,en;q=0.7,en-US;q=0.6,tr;q=0.5',
      'cache-control': 'no-cache',
      cookie:
        '_ga=GA1.2.602627100.1677235119; _gid=GA1.2.1817050688.1677323165; rl_page_init_referrer=RudderEncrypt%3AU2FsdGVkX1%2BsJdRi0yWRvc0kTJU24u8NphkIwIBHABruJlglQndQTwDCs4qPkwNQ; rl_page_init_referring_domain=RudderEncrypt%3AU2FsdGVkX19CQRshWPwa1p73XWCKSY2JNLQWb28qhAw%3D; walletAddress=0xf5e50a8e1bddcb4f1efa0cfc74bfc8c17f6cd121; authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRBZGRyZXNzIjoiMHhmNWU1MGE4ZTFiZGRjYjRmMWVmYTBjZmM3NGJmYzhjMTdmNmNkMTIxIiwic2lnbmF0dXJlIjoiMHhlOTgwZTRjZmM3OGY4MmNhYThlNWFmYTdlOTkzYzkxY2QxNWRhZWUxNTVlNzliNDZmZjg2MzYzY2Q1ZThlYzkzMTA1NGYwMzA3NjE4NjY2NDY5ZWI4N2JhZWQzOGFlNjc3MzMxZDI2N2M0NDk5NzFhYTI5Mjg2MmE3ZmJmMDQxNTFiIiwiaWF0IjoxNjc3MzYyMDQzLCJleHAiOjE2Nzk5NTQwNDN9.7c-sv0vBOWSzRhHTzvIFMq_eLe_7KCraxL_SWxWtJ0c; __cf_bm=EfXK1SF1_0VPjz0lJsQD.nV59MVWXUlKyaWMJCXmGns-1677362239-0-AV2vxmQrGqrVLhef+EOz2JeRniUoLddr4b4ulNv0RWNtqq6gDyiDWebrByXzLaWXe3gguLq2uM1L2MfOt8pBc8P0t774MvoSY1afTb5AGUIy; rl_trait=RudderEncrypt%3AU2FsdGVkX1%2FU7SlFSa%2F7rTmWOLs24YPhl%2BuOylw9lTc%3D; rl_group_id=RudderEncrypt%3AU2FsdGVkX19md5OsPQtV88iMMS1FOariv7pM%2Fz94zos%3D; rl_group_trait=RudderEncrypt%3AU2FsdGVkX1%2BmG6xtyFli1e0cV%2FeH9HqUsmhioF2P34k%3D; rl_anonymous_id=RudderEncrypt%3AU2FsdGVkX1%2BYIepAy6XAw7jggPzID9UJOByM2p0weW60ehTya3Fio%2FHlQP0ZAurkcdc1KGZjUBJ3E3Xnvd7kZA%3D%3D; rl_page_init_referrer=RudderEncrypt%3AU2FsdGVkX19k2F25oAsJT9ldcmgEcbubwFxiisWU2vQ%3D; rl_page_init_referring_domain=RudderEncrypt%3AU2FsdGVkX1%2FCOEH6sprd5934CGOERAFb9lKYf4CiIUo%3D; rl_user_id=RudderEncrypt%3AU2FsdGVkX1%2Bg4uzvSVeFjrsZGLexfwmHfvFr791j1zuFhRapPJXUVebwovEmjanQcPlQORlUt4pxfvNx1O%2F6vg%3D%3D; rl_session=RudderEncrypt%3AU2FsdGVkX19DStBvS%2FN%2BYdkIM8zI833jVPQGFZ39TTPwo2JtcNOU0WMfQjrxOsKGLo%2FgrIx%2Fbc8sXOL9%2BGH4Upa2W3htEopPFl7mIwGYa%2BBmR%2FeEgnkBwu%2FWqO47EuPo%2Ft1kR6ti0P3GHD%2BDWt08Jw%3D%3D; fs_uid=#o-19FFTT-na1#5864956233699328:5760363742023680:::#4158f583#/1708859179',
      dnt: '1',
      pragma: 'no-cache',
      'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    })

    await page.goto(collectionsInfo, { waitUntil: 'networkidle0' })
    const bodyHTML = await page.evaluate(() => document.body.innerHTML)

    console.log(bodyHTML)

    await browser.close()
  } catch (err) {
    console.error(err)
  }
}

async function getCollectionInfo() {
  try {
    const browser = await puppeteer.launch()
    const [page] = await browser.pages()

    page.setExtraHTTPHeaders({
      authority: 'core-api.prod.blur.io',
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'ru-RU,ru;q=0.9,en-RU;q=0.8,en;q=0.7,en-US;q=0.6,tr;q=0.5',
      'cache-control': 'no-cache',
      cookie:
        '_ga=GA1.2.602627100.1677235119; _gid=GA1.2.1817050688.1677323165; rl_page_init_referrer=RudderEncrypt%3AU2FsdGVkX1%2BsJdRi0yWRvc0kTJU24u8NphkIwIBHABruJlglQndQTwDCs4qPkwNQ; rl_page_init_referring_domain=RudderEncrypt%3AU2FsdGVkX19CQRshWPwa1p73XWCKSY2JNLQWb28qhAw%3D; walletAddress=0xf5e50a8e1bddcb4f1efa0cfc74bfc8c17f6cd121; authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRBZGRyZXNzIjoiMHhmNWU1MGE4ZTFiZGRjYjRmMWVmYTBjZmM3NGJmYzhjMTdmNmNkMTIxIiwic2lnbmF0dXJlIjoiMHhlOTgwZTRjZmM3OGY4MmNhYThlNWFmYTdlOTkzYzkxY2QxNWRhZWUxNTVlNzliNDZmZjg2MzYzY2Q1ZThlYzkzMTA1NGYwMzA3NjE4NjY2NDY5ZWI4N2JhZWQzOGFlNjc3MzMxZDI2N2M0NDk5NzFhYTI5Mjg2MmE3ZmJmMDQxNTFiIiwiaWF0IjoxNjc3MzYyMDQzLCJleHAiOjE2Nzk5NTQwNDN9.7c-sv0vBOWSzRhHTzvIFMq_eLe_7KCraxL_SWxWtJ0c; __cf_bm=EfXK1SF1_0VPjz0lJsQD.nV59MVWXUlKyaWMJCXmGns-1677362239-0-AV2vxmQrGqrVLhef+EOz2JeRniUoLddr4b4ulNv0RWNtqq6gDyiDWebrByXzLaWXe3gguLq2uM1L2MfOt8pBc8P0t774MvoSY1afTb5AGUIy; rl_trait=RudderEncrypt%3AU2FsdGVkX1%2FU7SlFSa%2F7rTmWOLs24YPhl%2BuOylw9lTc%3D; rl_group_id=RudderEncrypt%3AU2FsdGVkX19md5OsPQtV88iMMS1FOariv7pM%2Fz94zos%3D; rl_group_trait=RudderEncrypt%3AU2FsdGVkX1%2BmG6xtyFli1e0cV%2FeH9HqUsmhioF2P34k%3D; rl_anonymous_id=RudderEncrypt%3AU2FsdGVkX1%2BYIepAy6XAw7jggPzID9UJOByM2p0weW60ehTya3Fio%2FHlQP0ZAurkcdc1KGZjUBJ3E3Xnvd7kZA%3D%3D; rl_page_init_referrer=RudderEncrypt%3AU2FsdGVkX19k2F25oAsJT9ldcmgEcbubwFxiisWU2vQ%3D; rl_page_init_referring_domain=RudderEncrypt%3AU2FsdGVkX1%2FCOEH6sprd5934CGOERAFb9lKYf4CiIUo%3D; rl_user_id=RudderEncrypt%3AU2FsdGVkX1%2Bg4uzvSVeFjrsZGLexfwmHfvFr791j1zuFhRapPJXUVebwovEmjanQcPlQORlUt4pxfvNx1O%2F6vg%3D%3D; rl_session=RudderEncrypt%3AU2FsdGVkX19DStBvS%2FN%2BYdkIM8zI833jVPQGFZ39TTPwo2JtcNOU0WMfQjrxOsKGLo%2FgrIx%2Fbc8sXOL9%2BGH4Upa2W3htEopPFl7mIwGYa%2BBmR%2FeEgnkBwu%2FWqO47EuPo%2Ft1kR6ti0P3GHD%2BDWt08Jw%3D%3D; fs_uid=#o-19FFTT-na1#5864956233699328:5760363742023680:::#4158f583#/1708859179',
      dnt: '1',
      pragma: 'no-cache',
      'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    })

    await page.goto(infoURL, { waitUntil: 'networkidle0' })
    const bodyHTML = await page.evaluate(() => document.body.innerHTML)

    console.log(bodyHTML)

    await browser.close()
  } catch (err) {
    console.error(err)
  }
}

async function getEveryThinAbout() {
  try {
    const browser = await puppeteer.launch()
    const [page] = await browser.pages()

    page.setExtraHTTPHeaders({
      authority: 'core-api.prod.blur.io',
      accept:
        'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'accept-language': 'ru-RU,ru;q=0.9,en-RU;q=0.8,en;q=0.7,en-US;q=0.6,tr;q=0.5',
      'cache-control': 'no-cache',
      cookie:
        '_ga=GA1.2.602627100.1677235119; _gid=GA1.2.1817050688.1677323165; rl_page_init_referrer=RudderEncrypt%3AU2FsdGVkX1%2BsJdRi0yWRvc0kTJU24u8NphkIwIBHABruJlglQndQTwDCs4qPkwNQ; rl_page_init_referring_domain=RudderEncrypt%3AU2FsdGVkX19CQRshWPwa1p73XWCKSY2JNLQWb28qhAw%3D; walletAddress=0xf5e50a8e1bddcb4f1efa0cfc74bfc8c17f6cd121; authToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ3YWxsZXRBZGRyZXNzIjoiMHhmNWU1MGE4ZTFiZGRjYjRmMWVmYTBjZmM3NGJmYzhjMTdmNmNkMTIxIiwic2lnbmF0dXJlIjoiMHhlOTgwZTRjZmM3OGY4MmNhYThlNWFmYTdlOTkzYzkxY2QxNWRhZWUxNTVlNzliNDZmZjg2MzYzY2Q1ZThlYzkzMTA1NGYwMzA3NjE4NjY2NDY5ZWI4N2JhZWQzOGFlNjc3MzMxZDI2N2M0NDk5NzFhYTI5Mjg2MmE3ZmJmMDQxNTFiIiwiaWF0IjoxNjc3MzYyMDQzLCJleHAiOjE2Nzk5NTQwNDN9.7c-sv0vBOWSzRhHTzvIFMq_eLe_7KCraxL_SWxWtJ0c; __cf_bm=EfXK1SF1_0VPjz0lJsQD.nV59MVWXUlKyaWMJCXmGns-1677362239-0-AV2vxmQrGqrVLhef+EOz2JeRniUoLddr4b4ulNv0RWNtqq6gDyiDWebrByXzLaWXe3gguLq2uM1L2MfOt8pBc8P0t774MvoSY1afTb5AGUIy; rl_trait=RudderEncrypt%3AU2FsdGVkX1%2FU7SlFSa%2F7rTmWOLs24YPhl%2BuOylw9lTc%3D; rl_group_id=RudderEncrypt%3AU2FsdGVkX19md5OsPQtV88iMMS1FOariv7pM%2Fz94zos%3D; rl_group_trait=RudderEncrypt%3AU2FsdGVkX1%2BmG6xtyFli1e0cV%2FeH9HqUsmhioF2P34k%3D; rl_anonymous_id=RudderEncrypt%3AU2FsdGVkX1%2BYIepAy6XAw7jggPzID9UJOByM2p0weW60ehTya3Fio%2FHlQP0ZAurkcdc1KGZjUBJ3E3Xnvd7kZA%3D%3D; rl_page_init_referrer=RudderEncrypt%3AU2FsdGVkX19k2F25oAsJT9ldcmgEcbubwFxiisWU2vQ%3D; rl_page_init_referring_domain=RudderEncrypt%3AU2FsdGVkX1%2FCOEH6sprd5934CGOERAFb9lKYf4CiIUo%3D; rl_user_id=RudderEncrypt%3AU2FsdGVkX1%2Bg4uzvSVeFjrsZGLexfwmHfvFr791j1zuFhRapPJXUVebwovEmjanQcPlQORlUt4pxfvNx1O%2F6vg%3D%3D; rl_session=RudderEncrypt%3AU2FsdGVkX19DStBvS%2FN%2BYdkIM8zI833jVPQGFZ39TTPwo2JtcNOU0WMfQjrxOsKGLo%2FgrIx%2Fbc8sXOL9%2BGH4Upa2W3htEopPFl7mIwGYa%2BBmR%2FeEgnkBwu%2FWqO47EuPo%2Ft1kR6ti0P3GHD%2BDWt08Jw%3D%3D; fs_uid=#o-19FFTT-na1#5864956233699328:5760363742023680:::#4158f583#/1708859179',
      dnt: '1',
      pragma: 'no-cache',
      'sec-ch-ua': '"Not_A Brand";v="99", "Google Chrome";v="109", "Chromium";v="109"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Linux"',
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'sec-fetch-user': '?1',
      'upgrade-insecure-requests': '1',
      'user-agent':
        'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36',
    })

    await page.goto(everyThingAboutCollection, { waitUntil: 'networkidle0' })
    const bodyHTML = await page.evaluate(() => document.body.innerHTML)

    console.log(bodyHTML)

    await browser.close()
  } catch (err) {
    console.error(err)
  }
}

getEveryThinAbout()
