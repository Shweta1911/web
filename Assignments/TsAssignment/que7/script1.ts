class Item{
    itemId:Number
    itemName:String
    constructor(itemId:Number,
        itemName:String
        ){
        this.itemId=itemId
        this.itemName=itemName
    }
    printInfoCustomer(){
        console.log(`id=${this.itemId} , name=${this.itemName}`)
    }
}



class Inventory{
    invLocation:String
    items:Item[]=[]

    constructor(invLocation:String){
        this.invLocation=invLocation
    }
    printInfo(){
        console.log(` Bank Location=${this.invLocation} `)
        for(const item of this.items){
            item.printInfoCustomer()
        }
    }
    addItem(itemId:Number,itemName:String){
        const item=new Item(itemId,itemName)
        this.items.push(item)
    }

    deleteItem(itemId:number){        
        // for(const item in this.items){
        //     if(this.items[item].itemId==itemId){
        //         this.items.splice(item,1)
        //     }
        // }

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].itemId === itemId) {
              this.items.splice(i, 1);
            }
          }

    }
    searchItem(itemName:String){
        for(const item in this.items){
            if(this.items[item].itemName==itemName){
                this.items[item].printInfoCustomer()
            }
        }
    }
}


const inv=new Inventory("PUNE")

inv.addItem(1,"Item1")
inv.addItem(2,"Item2")
inv.addItem(3,"Item3")
inv.addItem(4,"Item4")
inv.addItem(5,"Item5")
inv.addItem(6,"Item6")
inv.addItem(7,"Item7")
inv.addItem(8,"Item8")
inv.addItem(9,"Item9")
inv.addItem(10,"Item10")

inv.printInfo()

inv.searchItem("Item5")