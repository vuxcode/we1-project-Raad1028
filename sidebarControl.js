    var sidebarframe = document.getElementById("sidebarframe")
    var sidebardiv = document.getElementById("sidebardiv")
    
    window.document.addEventListener("extendMain", extendSidebar)
    window.document.addEventListener("minimizeMain", minimizeSidebar)

    function extendSidebar() {
        sidebarframe.classList.add("extended")
        sidebardiv.classList.add("extended")
    }
    function minimizeSidebar() {
        sidebarframe.classList.remove("extended")
        sidebardiv.classList.remove("extended")
    }