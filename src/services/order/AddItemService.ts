import prismaClient from "../../prisma";

interface Itemrequest{
    order_id: string;
    product_id: string;
    amount: number;
}

class AddItemService{
    async execute({ order_id, product_id, amount }: Itemrequest){

        const order = await prismaClient.item.create({
            data:{
                order_id: order_id,
                product_id: product_id,
                amount: amount

            }
        })

        return order;
    }
}

export { AddItemService }