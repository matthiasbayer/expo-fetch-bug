import { View, Button } from "react-native";

import { fetch } from "expo/fetch";
import { useCallback } from "react";

export default function HomeScreen() {
  const fetchJson = useCallback(async () => {
    const response = await fetch("https://httpbin.org/stream/1", {
      headers: { Accept: "text/event-stream" },
    });

    if (response.body) {
      const reader = response.body.getReader();
      await reader.read();
    }
  }, []);

  return (
    <View>
      <Button onPress={fetchJson} title="Fetch" />
    </View>
  );
}
