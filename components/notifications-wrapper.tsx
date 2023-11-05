// "use client";
// import { NotifyClient } from "@walletconnect/notify-client";
// import { useEffect, useState } from "react";

// export default function NotificationsWrapper() {
//   const [notifyClient, setNotifyClient] = useState<NotifyClient | undefined>(
//     undefined
//   );

//   useEffect(() => {
//     setupNotifyClient();
//   }, []);

//   const setupNotifyClient = async () => {
//     const client = await NotifyClient.init({
//       projectId: "62066586b5adc509f3304c9312077975",
//     });
//     setNotifyClient(client);
//   };

//   useEffect(() => {
//     if (notifyClient) {
//       notifyClient.on("notify_subscription", async ({ params }) => {
//         const { error } = params;

//         if (error) {
//           // Setting up the subscription failed.
//           // Inform the user of the error and/or clean up app state.
//           alert("Setting up subscription failed: " + error.message);
//         } else {
//           // New subscription was successfully created.
//           // Inform the user and/or update app state to reflect the new subscription.
//
//         }
//       });

//       // Handle an incoming notification
//       notifyClient.on("notify_message", ({ params }) => {
//         const { message } = params;
//         // e.g. build a notification using the metadata from `message` and show to the user.
//         alert(message);
//       });

//       // Handle response to a `notifyClient.update(...)` call
//       notifyClient.on("notify_update", ({ params }) => {
//         const { error } = params;

//         if (error) {
//           // Updating the subscription's scope failed.
//           // Inform the user of the error and/or clean up app state.
//           console.error("Setting up subscription failed: ", error);
//         } else {
//           // Subscription's scope was updated successfully.
//           // Inform the user and/or update app state to reflect the updated subscription.
//
//         }
//       });
//     }
//   }, [notifyClient]);

//   return <></>;
// }
