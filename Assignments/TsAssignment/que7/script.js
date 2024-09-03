var Item = /** @class */ (function () {
    function Item(itemId, itemName) {
        this.itemId = itemId;
        this.itemName = itemName;
    }
    Item.prototype.printInfoCustomer = function () {
        console.log("id=".concat(this.itemId, " , name=").concat(this.itemName));
    };
    return Item;
}());
var Inventory = /** @class */ (function () {
    function Inventory(invLocation) {
        this.items = [];
        this.invLocation = invLocation;
    }
    Inventory.prototype.printInfo = function () {
        console.log(" Bank Location=".concat(this.invLocation, " "));
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            item.printInfoCustomer();
        }
    };
    Inventory.prototype.addItem = function (itemId, itemName) {
        var item = new Item(itemId, itemName);
        this.items.push(item);
    };
    // deleteItem(itemId:number){        
    //     for(const item in this.items){
    //         if(this.items[item].itemId==itemId){
    //             this.items.splice(item,1)
    //         }
    //     }
    // }
    Inventory.prototype.searchItem = function (itemName) {
        for (var item in this.items) {
            if (this.items[item].itemName == itemName) {
                this.items[item].printInfoCustomer();
            }
        }
    };
    return Inventory;
}());
var inv = new Inventory("PUNE");
inv.addItem(1, "Item1");
inv.addItem(2, "Item2");
inv.addItem(3, "Item3");
inv.addItem(4, "Item4");
inv.addItem(5, "Item5");
inv.addItem(6, "Item6");
inv.addItem(7, "Item7");
inv.addItem(8, "Item8");
inv.addItem(9, "Item9");
inv.addItem(10, "Item10");
inv.printInfo();
inv.searchItem("Item5");
