function OnGithubButtonClick() {
    alert("Мой гитхаб: https://github.com/prdxr")
}

var el = document.getElementsByClassName("github-button")[0];
if (el.addEventListener)
    el.addEventListener("click", OnGithubButtonClick, false);
else if (el.attachEvent)
    el.attachEvent("onclick", OnGithubButtonClick);