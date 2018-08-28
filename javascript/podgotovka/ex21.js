let a = ["a", "b", "c"];
let it = a.entries();
let entry;
while (!(entry = it.next()).done) {
    console.log(entry.value[1]);
}

