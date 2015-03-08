util_localstorage = {
    getArray: function(zKey) {
    if(typeof zKey === 'undefined'){zKey = "zLocalStorage";}
    if (typeof (zLocalStorage=localStorage.getItem(zKey)) === 'object') return [];
    if(zLocalStorage.startsWith("#zLocalStorage")) return zLocalStorage.slice(14).split("_|_");
    else return zLocalStorage;
    },
    set: function(item) {
    
    }
    getLength: function(){return localStorage.length;}
}