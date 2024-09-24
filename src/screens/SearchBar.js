import React, { useState, useRef, useEffect } from "react";
import { View, TextInput, StyleSheet, Animated, Text } from "react-native";
import Octicons from '@expo/vector-icons/Octicons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  const [isFocused, setIsFocused] = useState(false);
  const textInputRef = useRef(null);

  const [dynamicPlaceholder, setDynamicPlaceholder] = useState("Spottis"); // Dynamic portion
  const placeholders = ["Spottis", "Cities"];  // List of dynamic placeholders
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const animatedValue = useRef(new Animated.Value(50)).current; // Initial position of the text
  const opacityValue = useRef(new Animated.Value(0)).current; // Initial opacity

  const handleArrowLeftClick = () => {
    setIsFocused(false);
    textInputRef.current.blur();
  };

  useEffect(() => {
    // Set an interval to change the dynamic part of the placeholder every 2 seconds
    if (!term) {  // Only run if term is empty
      const intervalId = setInterval(() => {
        slideInPlaceholder();
        // Update dynamic placeholder text index
        setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
      }, 3500);
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }
  }, [term]);

  useEffect(() => {
    setDynamicPlaceholder(placeholders[placeholderIndex]); // Update dynamic placeholder value
  }, [placeholderIndex]);

  const slideInPlaceholder = () => {
    // Reset animation values
    animatedValue.setValue(50); // Start the text from below the view
    opacityValue.setValue(0); // Make text initially invisible

    // Create the slide-in animation
    Animated.timing(animatedValue, {
      toValue: 0, // Slide to the original position
      duration: 1000, // Animation duration (1.0 seconds)
      useNativeDriver: true,
    }).start();

    // Fade in the opacity
    Animated.timing(opacityValue, {
      toValue: 1, // Fully visible
      duration: 1000, // Match the slide animation duration
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={[styles.background, isFocused && styles.focusedInput]}>
      {isFocused 
        ? <Octicons name="arrow-left" size={24} style={styles.iconStyle} onPress={handleArrowLeftClick} />
        : <Octicons name="search" size={24} style={styles.iconStyle} />
      }
      <View style={styles.inputWrapper}>
        <TextInput
          ref={textInputRef}
          autoCapitalize="none"
          autoCorrect={false}
          style={[styles.inputStyle]}
          placeholder='' // We are managing placeholder manually with Text component
          placeholderTextColor='#8D9383'
          value={term}
          selectionColor='#FFFFFF' 
          onChangeText={onTermChange}
          onEndEditing={onTermSubmit}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <View style={styles.placeholderWrapper}>
          {/* Only show placeholder if term is empty */}
          {term === '' && (
            <>
              <Text style={styles.staticText}>Find </Text>
              <Animated.View
                style={[
                  styles.dynamicTextWrapper,
                  {
                    transform: [{ translateY: animatedValue }],
                    opacity: opacityValue,
                  },
                ]}
                pointerEvents="none"
              >
                <Text style={styles.dynamicText}>{dynamicPlaceholder}</Text>
              </Animated.View>
            </>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: '#33494d',
    height: 50,
    borderRadius: 50,
    borderColor: '#4D5E58',
    borderWidth: .3,
    marginHorizontal: 15,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center', // Align items to center vertically
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
    color: '#FFFFFF',
    zIndex: 10000
  },
  inputWrapper: {
    flex: 1,
    position: 'relative', // To overlay the Text components over the TextInput
    justifyContent: 'center',
    overflow: 'hidden', // Ensure the animated text doesn't overflow outside the box
  },
  placeholderWrapper: {
    position: 'absolute',
    flexDirection: 'row', // "Find" and animated text in the same row
    alignItems: 'center', // Vertically center the text
  },
  staticText: {
    color: '#8D9383',
    fontSize: 18,
  },
  dynamicTextWrapper: {
    // This wrapper is for the animated text
  },
  dynamicText: {
    color: '#8D9383',
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15,
    color: 'black'
  },
  focusedInput: {
    borderColor: 'gray',
    borderWidth: 1.5,
    borderRadius: 50
  }
});

export default SearchBar;
