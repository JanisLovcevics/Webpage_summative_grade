import json

file_path = "products_data.json"


def add_data(_file_path, new_data):
    with open(file_path,'r',encoding='utf-8') as file:
        data = json.load(file)

    data["products_list"].append(new_data)
    with open(file_path, 'w', encoding='utf-8') as file:
        json.dump(data, file, indent=4, ensure_ascii=False)






def get_data():
    try:
        product_name, product_price, product_image = input().split("_")
    except ValueError:
        print("Wrong syntax")


    product_data = {
        "name": product_name, 
        "price": product_price, 
        "image": f"images/Shop/product{product_image}.png"
        }
    
    return product_data

add_data(file_path, get_data())