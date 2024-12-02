import { View, Text, Modal } from "react-native";
import { Stack } from "expo-router";
import { ToastProvider } from "react-native-toast-notifications";
import AuthProvider from "../providers/auth-provider";
import { QueryClientProvider } from "@tanstack/react-query";
import QueryProvider from "../providers/query-provider";
import { StripeProvider } from "@stripe/stripe-react-native";
import NotificationProvider from "../providers/notification-provider";

export default function RootLayout() {
  console.log(
    "This is the key:",
    process.env.EXPO_PUBLIC_STRIPE_PUBLISHABLE_KEY
  );

  return (
    <ToastProvider>
      <AuthProvider>
        <QueryProvider>
          <StripeProvider publishableKey="pk_test_51QNULaGTZacrESlbsj7Bi0PPFy04AdVdedPdFPZbB1VsJjiSodS64LYDMr5bnWO1hJRn4Rb5VLvjvbliVq6CNyWp0012z0Y0Nl">
            <NotificationProvider>
              <Stack>
                <Stack.Screen
                  name="(shop)"
                  options={{ headerShown: false, title: "Shop" }}
                />
                <Stack.Screen
                  name="categories"
                  options={{ headerShown: false, title: "Categories" }}
                />
                <Stack.Screen
                  name="product"
                  options={{ headerShown: false, title: "Product" }}
                />
                <Stack.Screen
                  name="cart"
                  options={{
                    presentation: "modal",
                    title: "Shopping Cart",
                    animation: "slide_from_bottom",
                  }}
                />
                <Stack.Screen name="auth" options={{ headerShown: false }} />
              </Stack>
            </NotificationProvider>
          </StripeProvider>
        </QueryProvider>
      </AuthProvider>
    </ToastProvider>
  );
}
