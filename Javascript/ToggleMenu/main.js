let toggleNavStatus = false;

let toggleNav = function(){
 let grabSidebar=document.querySelector(".nav-sidebar");
 let grabSidebarUl=document.querySelector(".nav-sidebar ul");
 let grabSidebarTitle=document.querySelector(".nav-sidebar span");
 let grabSidebarLinks=document.querySelectorAll(".nav-sidebar a");

 if(toggleNavStatus == false){
   grabSidebarUl.style.visibility = "visible";
   grabSidebar.style.width = "272px";
   grabSidebarTitle.style.opacity = "0.5";

   let arraylength = grabSidebarLinks.length;
   for (let i = 0; i < arraylength; i++) {
     grabSidebarLinks[i].style.opacity = "1";
   }
   toggleNavStatus = true;
 }


 else if(toggleNavStatus == true){
   grabSidebar.style.width = "50px";
   grabSidebarTitle.style.opacity = "0";

   let arraylength = grabSidebarLinks.length;
   for (let i = 0; i < arraylength; i++) {
     grabSidebarLinks[i].style.opacity = "0";
   }

   grabSidebarUl.style.visibility = "hidden";

   toggleNavStatus = false;
 }

}
