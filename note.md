# Khởi tạo dự án

1. npm init -y
2. npm i express
3. build vite: npm install vite vite-plugin-node -D

# Thao tác với mongodb

## Đọc dữ liệu

1. Truy vấn nhiều điều kiện
   db.mycollection.find({ age: 18, city: "Ha Nam"})

2. Truy vấn với AND hoặc OR

-- Truy vấn với AND

    db.mycollection.find({
            $and: [
            {name: "Truong Van Tung"},
            {age: 22}
        ]
    })

-- Truy vấn với OR

    db.mycollection.find({
            $or: [
            {name: "Truong Van Tung"},
            {age: 22}
        ]
    })

3. Sử dụng các phép so sánh

-- Lớn hơn: $gt -> greater than

    db.mycollection.find({
        age: {
            $gt: 18
        }
    })

-- Nhỏ hơn: $lt -> less than

    db.mycollection.find({
        age: {
            $lt: 18
        }
    })

4. Sắp xếp dữ liệu: sort

-- Sắp xếp tăng dần: 1 tăng dần

    db.mycollection.find().sort({age: 1})

-- Sắp xếp giảm dần: -1 giảm dần

    db.mycollection.find().sort({age: -1})

## Update

1. Update one

   db.mycollection.updateOne(
   {name:"Truong Van Tung"},
   {$set: {age:18}}
   )

2. Update many

   db.mycollection.updateOne(
   {name:"Truong Van Tung"},
   {$set: {age:18}}
   )

## Xóa dữ liệu

1. Delete one

   db.mycollection.updateOne(
   {name:"Truong Van Tung"},
   {$set: {age:18}}
   )

2. Delete many

   // Xóa những collection tuổi nhỏ hơn 20
   db.mycollection.deleteMany({
   age: {$lt:20}
   })

## Xóa collection: db.mycolltection.drop()

## Tối ưu mongodb

1. Kiểm tra index trong bảng

   db.customers.getIndexes()

2. Kiểm tra thông số của collection

   db.runCommand({
   collStats: "customers"
   })

3. Phân tích 1 câu lệnh thêm: .explain("executionStats")

-- Khi chưa tối ưu
   db.customers.find({name: "Huy", age:35}).explain("executionStats") -> Số doctuments phải đoc là 5tr bản ghi

-- Sử dụng index trên trường để tối ưu
    
    -- Tạo index cho cột tuổi
    
    db.customers.createIndex(
        {age: 1}, -> 1 là tạo index theo chiều tăng dần
        {name: "IDX_AGE} -> tên index
    )

-- Xóa index trong bảng

    db.customer.dropIndex("Tên index được đặt")

-- Sử dụng index trên 2 côt email, age

    db.customers.createIndex(
        {email:1, age:1},
        {name: "IDX_EMAIL_AGE"}
    )

* Index trong bảng nên được đánh ở những cột xuất hiện trước nó ví dụ như:

- Ta có cột email đứng trước cột tuổi thì hay đánh index bằng cú pháp: 
    
    db.customers.createIndex(
        {email:1, age:1},
        {name: "IDX_EMAIL_AGE"}
    )

=> Điều này sẽ giúp truy vấn sử dụng giải thuật IXSCAN nhằm tối ưu performace

- Ngược lại nếu ta đánh index ở cột age trước chứ không phải email: 

     db.customers.createIndex(
        {age:1, email:1},
        {name: "IDX_AGE_EMAIL"}
    )

=> Nếu sử dụng index ở cấu hình trên thì truy vấn sẽ sử dụng giải thuật COLLSCAN điều này sẽ giảm performace.

==> Tóm tại: nên đánh index ở những cột xuất hiện trước nó của bảng, đãnh index bằng cụ pháp IXSCAN nhằm tăng performace