//this script allows to switch language between english and japanese in the website
$(document).ready(function() { //wait until document is ready

    //checks local storage if japanese lang option was enabled through use of cookies and then will change to japanese or leave in english
    if (localStorage.getItem("langJa")) {
		//sets all text to japanese
        langToggled = false;
        $('#heading').text('フォームを書き込むと私の履歴書をもらえます')
        $('#home').text('ホーム')
        $('#interests').text('私の趣味')
        $('#allEle').text('すべてのエレメント第１')
        $('#allEle2').text('すべてのエレメント第２')
        $('#imgMap').text('イメージマップ')
        $('#temp').text('温度')
		$('#features').text('機能')
        $('#lang').text('English/英語')
        $('#email').attr('placeholder', 'メールアドレス')
        $('#person_name').attr('placeholder', '名前')
        $('#company_name').attr('placeholder', '会社の名前')
        $('#usercomment').attr('placeholder', '履歴書を見たい理由は？コメントしてください')
        $('#short').text('短い履歴書')
        $('#long').text('長い履歴書')
        $('#submit_form').attr('value', '依頼する')
		$('#cookieMsg').text('サイトにCookieデータの保存と読み取りを許可する必要があります')
		$('#cookiesAgree').html('同意')

        //adds local storage item if cookies are enabled to keep lang preferences
        if (localStorage.getItem("cookieBannerDisplayed", "true")) {
            localStorage.setItem("langJa", "true");
        }
        return;
    }
});

var langToggled = true;
//toggles language between english and japanese
function toggleLang() {
    //sets all text to japanese
    if (langToggled) {
        langToggled = false;
        $('#heading').text('フォームを書き込むと私の履歴書をもらえます')
        $('#home').text('ホーム')
        $('#interests').text('私の趣味')
        $('#allEle').text('すべてのエレメント第１')
        $('#allEle2').text('すべてのエレメント第２')
        $('#imgMap').text('イメージマップ')
        $('#temp').text('温度')
		$('#features').text('機能')
        $('#lang').text('English/英語')
        $('#email').attr('placeholder', 'メールアドレス')
        $('#person_name').attr('placeholder', '名前')
        $('#company_name').attr('placeholder', '会社の名前')
        $('#usercomment').attr('placeholder', '履歴書を見たい理由は？コメントしてください')
        $('#short').text('短い履歴書')
        $('#long').text('長い履歴書')
        $('#submit_form').attr('value', '依頼する')
		$('#cookieMsg').text('サイトにCookieデータの保存と読み取りを許可する必要があります')
		$('#cookiesAgree').html('同意')
		
        //adds local storage item if cookies are enabled to keep lang preferences
        if (localStorage.getItem("cookieBannerDisplayed", "true")) {
            localStorage.setItem("langJa", "true");
        }
        return;
    } else if (!langToggled) {
        //sets all text to english
        langToggled = true;
        $('#heading').text('Fill In This Form To Recieve A Copy Of My CV')
        $('#home').text('Home')
        $('#interests').text('My Interests')
        $('#allEle').text('All Elements')
        $('#allEle2').text('All Elements 2')
        $('#imgMap').text('Image Map')
        $('#temp').text('Temperature')
		$('#features').text('Key Features')
        $('#lang').text('日本語/Japanese')
        $('#email').attr('placeholder', 'Email Address')
        $('#person_name').attr('placeholder', 'Full Name')
        $('#company_name').attr('placeholder', 'Company Name')
        $('#usercomment').attr('placeholder', 'Please leave a comment on why you would like to see my CV')
        $('#short').text('Short CV')
        $('#long').text('Long CV')
        $('#submit_form').attr('value', 'Request CV')
		$('#cookieMsg').text('By clicking "I Agree", you allow us store your language and dark mode preferences.')
		$('#cookiesAgree').html('I Agree')
		
        //removes local storage item if cookies are enabled to keep lang preferences
        if (localStorage.getItem("cookieBannerDisplayed", "true")) {
            localStorage.removeItem("langJa");
        }
        return;
    }
}