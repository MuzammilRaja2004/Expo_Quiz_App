import { getAuth, signOut } from "firebase/auth";
import React from "react";
import {
  Button,
  Text,
  View,
  StatusBar,
  SafeAreaView,
  ImageBackground,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { app, auth } from "../config";
// import { auth, db } from "../config";
import { COLORS, SIZES } from "../constants";

const Home = ({ navigation }) => {
  const questionTypes = {
    GK: [
      {
        id: 1,
        question: "Who is owais",
        options: ["Male", "Female"],
        right: "Female",
      },
      {
        id: 2,
        question: "What does He do?",
        options: ["Bakchodi", "Bht zyada bakchodi"],
        right: "Bht zyada bakchodi",
      },
    ],
    Science: [
      {
        id: 1,
        question: "How many branches of science?",
        options: ["1", "2", "3"],
        right: "3",
      },
    ],
    Maths: [
      {
        id: 1,
        question: "What is triangle?",
        options: ["shape", "human", "animal"],
        right: "shape",
      },
      {
        id: 2,
        question: "How many sides of a triangle?",
        options: ["1", "2", "3", "4"],
        right: "3",
      },
      {
        id: 3,
        question: "How many sides of a circle?",
        options: ["0", "2", "3", "4"],
        right: "0",
      },
    ],
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />
      <View
        style={{
          flex: 1,
          paddingVertical: 40,
          paddingHorizontal: 16,
          backgroundColor: COLORS.background,
          position: "relative",
          color: COLORS.white,
        }}
      >
        <ScrollView>
          <View style={{ color: COLORS.white }}>
          {Object.keys(questionTypes).map(question => (
              <TouchableOpacity  key={question} onPress={() =>
                  navigation.navigate('Questions', { questionType: question, selectedQuestion: questionTypes[question] })
              }>
            <View
              style={{
                backgroundColor: COLORS.secondary,
                marginBottom: 20,
                borderRadius: 10,
              }}
            >
              <View>
                <View style={{ padding: 20 }}>
                  <Text
                    style={{ textTransform: "capitalize", color: COLORS.white ,fontSize:19}}
                  >
                    Quiz: {question}
                  </Text>
                  <Text
                    style={{ textTransform: "capitalize", color: COLORS.white,fontSize:19 }}
                  >
                    Questions: {questionTypes[question].length} 
                  </Text>
                
                </View>
                <View>
                  <Image
                    source={require("../assets/images/DottedBG.png")}
                    style={{
                      width: SIZES.width,
                      height: 130,
                      zIndex: -1,
                      position: "absolute",
                      bottom: -6,
                      left: 0,
                      right: 0,
                    }}
                    resizeMode={"contain"}
                  />
                </View>
              </View>
            </View>
            </TouchableOpacity>
             ))}

            <Button
              title="Logout"
              onPress={() => signOut(auth)}
              style={{ marginBottom: 10 }}
            />
          </View>
        </ScrollView>
        {/* Background Image */}
        <Image
          source={require("../assets/images/Image13.png")}
          style={{
            width: 200,
            height: 900,
            zIndex: -1,
            position: "absolute",
            top: -250,
            left: 0,
          }}
          resizeMode={"contain"}
        />
        {/* Background Image */}
        <Image
          source={require("../assets/images/Image14.png")}
          style={{
            width: 200,
            height: 900,
            zIndex: -1,
            position: "absolute",
            // top: -250,
            right: 0,
          }}
          resizeMode={"contain"}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
