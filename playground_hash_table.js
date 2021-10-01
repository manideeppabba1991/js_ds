const Hashtable = require("./ds_base_classes/hashTable");

let ht = new Hashtable();
ht.set("hello", 9);
ht.set("hello", 26); // should update existing one
ht.set("world", 10);
ht.set("kitty", 9);
ht.set("hello", 91); // should update existing one
ht.set("Kitty", 96); // should update existing one
ht.set("Dragon", 96);
console.log(ht.keyMap);
console.log(ht.get("hello"));
console.log(ht.get("kitty"));
console.log(ht.get("KiTTy"));
console.log(ht.get("nothing"));
console.log(ht.keys());
console.log(ht.values());