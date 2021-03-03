window.addEventListener('DOMContentLoaded', function(){
    'use strict';

    function tabsOnNativeJS(tabsParent, tabs, tabsContent) {

        //parent takes parent element of the tabs
        const parent = document.querySelector(tabsParent);
        //childrenTabs takes tabs elements
        const childrenTabs = document.getElementsByClassName(tabs);
        //childrenTabsContent takes content of the tabs
        const childrenTabsContent = document.querySelectorAll(tabsContent);

        //hide all childrenTabsContent starting with 'a' element
        function hideOtherTabContent(a) {
            for(let i = a; i < childrenTabsContent.length; i++) {
                childrenTabsContent[i].classList.add('hide');
                childrenTabsContent[i].classList.remove('show');
            }
        }
        //from the start will show only first element with index '0'
        hideOtherTabContent(1);

        //check if exact(b) content is hidden. If true function makes 3 things:
        //1) hide all contents
        //2)remove class 'hide' from the element
        //3)add class 'show' to the element 
        function showExactTabContent(b) {
            if(childrenTabsContent[b].classList.contains('hide')) {
                // 1)
                hideOtherTabContent(0);
                // 2)
                childrenTabsContent[b].classList.remove('hide');
                // 3)
                childrenTabsContent[b].classList.add('show');
            }
        }

        //delegate event click from the parent to tabs
        parent.addEventListener('click', function(event) {
            let target = event.target;
            //if user clicked on element with class 'tabs', 
            //loop runs all tabs and compare if the target equal to childrenTabs[i]
            //if it is, we call showExactTabContent with 'i' as parametr
            if(target && target.classList.contains(tabs)){

                for(let i = 0; i < childrenTabs.length; i++) {

                    if(target == childrenTabs[i]) {
                        showExactTabContent(i);
                        break;
                    }
                }
            }
        });
    }

    //here you need to give selectors/class to variables as string 
    const parent = '.info-header';
    //CAREFULLY value of 'childrenTabs' must be written without a dot in start!!!
    //Because 'childrenTabs' will be used with getElementByClassName()
    const childrenTabs = 'info-header-tab';
    const childrenTabsContent = '.info-tabcontent';
    
    tabsOnNativeJS(parent, childrenTabs, childrenTabsContent);
})