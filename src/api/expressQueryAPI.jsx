import remaining from "../../public/remaining.json";

export default async function expressQueryAPI(query = "remaining") {
  console.log("remaining: ", remaining);
  try {
    return await fetch("../../public/remaining.json")
      .then(async (res) => {
        // @QueryTest - uncomment to test query
        const response = await res.json();
        console.log("Remaining Response: ", response);
        return [...response];
      })
      .catch((error) => {
        console.error(`Error: unable to fetch ${query} from server`, error);
      });
  } catch (error) {
    console.error(error.message);
  }
}
