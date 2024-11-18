import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data saved successfully!');
    } catch (error) {
      console.error('Error saving data:', error);
    }
};

export const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Data retrieved:', value);
      return value;
    }
  } catch (e) {
    console.error('Failed to fetch data', e);
  }
};
