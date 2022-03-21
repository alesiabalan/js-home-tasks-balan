function THashStorage() {
    this.store = {};
};

THashStorage.prototype.AddValue = function (Key,Value) {
    this.store[Key] = Value;
};

THashStorage.prototype.GetValue = function (Key) {
    return this.store[Key];
};

THashStorage.prototype.DeleteValue = function (Key) {
    if(!(Key in this.store)) {
        return false;
    }
    return delete this.store[Key];
};

THashStorage.prototype.GetKeys = function () {
    return Object.keys(this.store);
};

var DrinkStorage = new THashStorage();

document.getElementById('add-cocktail').addEventListener('click', function()
{
    var name = document.getElementById('name-cocktail');
    var isAlcohol = document.getElementById('alc-cocktail');
    var recipe = document.getElementById('rec-cocktail');

    DrinkStorage.AddValue(name, {name, isAlcohol, recipe});
    console.log('Coctail was added', DrinkStorage.GetValue(name));
});

document.getElementById('get-cocktail').addEventListener('click', function()
{
    var name = document.getElementById('name-cocktail');
    document.getElementById('cocktails').textContent = DrinkStorage.GetValue(name);
});

document.getElementById('delete-cocktail').addEventListener('click', function()
{
    var name = document.getElementById('name-cocktail');
    DrinkStorage.DeleteValue(name);
});

document.getElementById('all-cocktails').addEventListener('click', function()
{
    document.getElementById('cocktails').textContent = DrinkStorage.GetKeys();
});