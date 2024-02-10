"use Server";
import clientPromise from "@/lib/connect";
import generateProduct from "./generateproduct";
const learnmongo = async () => {
  const client = await clientPromise;
  const collection = client.db().collection("premium");

  //*Insertion
  //?insert one
  // collection.insertOne({
  //   name: "monu",
  //   fullname: "monu Kumar",
  // });

  // //?insert Many
  // collection.insertMany([
  //   {
  //     name: "monu",
  //     fullname: "monu Kumar",
  //   },
  //   {
  //     name: "monu2",
  //     fullname: "monu2 kumar",
  //   },
  // ]);

  //* deleting collection
  // collection.drop();

  //* finding documents in colloection

  generateProduct(10);
  console.log(generateProduct(10));
};

export default learnmongo;
