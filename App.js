import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity} from "react-native";
import Torch from "react-native-torch";
import RNShake from "react-native-shake";


const App =() =>{
  const [toogle, setToogle] = useState(false);
  const handleChangeToogle = () => setToogle(oldToogle => !oldToogle);

  useEffect(()=>{
    //Liga flash do celular
    Torch.switchState( toogle);
  }, [toogle]);

  useEffect(() => {

    //quando o celular dor chacalhado, mudaremos o toogle
    const subscription = RNShake.addListener(()=>{
      setToogle(oldToogle => !oldToogle);
    });
    //quando essa funcao vai ser chamada quando o componetefor ser desmotando
    return () => subscription.remove();
  }, []);

  return(
    <View style={toogle? style.containerLigth :style.container}>
      <TouchableOpacity onPress= {handleChangeToogle}>
        <Image
          style={toogle ? style.ligthingOn : style.ligthingOff}
          source={toogle
            ? require("./assets/icons/eco-light.png")
            : require("./assets/icons/eco-light-off.png")
          } 
        />
        <Image
          style={toogle ? style.ligthingOn : style.ligthingOff}
          source={toogle
            ? require("./assets/icons/logo-dio.png")
            : require("./assets/icons/logo-dio-white.png")
          } 
        />
      </TouchableOpacity>
    </View>
  )
};

export default App;

const style =StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"black",
    alignItems:"center",
    justifyContent:"center",
  },
  containerLigth:{
    flex:1,
    backgroundColor:"white",
    alignItems:"center",
    justifyContent:"center",
  },
  ligthingOn:{
    resizeMode:"contain", //a imagem vai fica com um tamanho adequado na tela
    alignSelf:"center",
    width:150,
    height:150,
  }, 
  ligthingOff:{
    resizeMode:"contain", //a imagem vai fica com um tamanho adequado na tela
    alignSelf:"center",
    tintColor:"white",
    width:150,
    height:150,
  }, 

});