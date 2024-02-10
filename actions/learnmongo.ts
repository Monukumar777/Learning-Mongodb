"use Server";

import clientPromise from "@/lib/connect";

const learnmongo = async () => {
  const client = await clientPromise;
  const collection = client.db().collection("premium");
  collection.insertOne({
    name: "monu",
    fullname: "monu Kumar",
  });
};

export default learnmongo;
