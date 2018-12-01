// hides an element after a given amount of time
function message(select, time) {
    let hide_ele = document.querySelector(select);

    if (hide_ele) {
        setTimeout(() => {
            hide_ele.style.visibility = 'hidden';
        }, time);
    }
}

message('.msg', 3000);