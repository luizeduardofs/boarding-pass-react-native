import { Flight } from "@/components/flight";
import { Info } from "@/components/info";
import { colors } from "@/styles/colors";
import { Ionicons } from "@expo/vector-icons";
import { ImageBackground, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";
import Svg, { Circle, Line } from "react-native-svg";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.header}
        source={require("@/assets/cover.jpg")}
      >
        <Text style={styles.title}>Cartão de embarque</Text>
        <Text style={styles.subtitle}>Falta 45 dias para sua viagem</Text>
      </ImageBackground>

      <View style={styles.ticket}>
        <View style={styles.content}>
          <View style={styles.flight}>
            <Flight label="São Paulo" value="GRU" />
            <View style={styles.duration}>
              <Ionicons name="airplane-sharp" size={32} color={colors.black} />
              <Text style={styles.hours}>6h 0m</Text>
            </View>
            <Flight label="Curitiba" value="CWB" />
          </View>

          <Text style={styles.label}>Passageiro</Text>
          <Text style={styles.name}>Luiz Eduardo</Text>

          <View style={styles.details}>
            <View style={styles.inline}>
              <Info label="Data" value="16 de Set." />
              <Info label="Embarque" value="18 de Set." />
            </View>
          </View>
        </View>

        <View>
          <Svg height={20} width="100%">
            <Circle r={8} cx="0%" cy="50%" fill={colors.black} />
            <Line
              x1="0%"
              y1="50%"
              x2="100%"
              y2="50%"
              stroke={colors.gray[400]}
              strokeWidth={1}
              strokeDasharray="5,5"
            />
            <Circle r={8} cx="100%" cy="50%" fill={colors.black} />
          </Svg>
        </View>

        <View style={styles.footer}>
          <View style={styles.footerContent}>
            <View style={styles.inline}>
              <Info label="Voo" value="A0M34" />
              <Info label="Assento" value="27G" />
            </View>
            <View style={styles.inline}>
              <Info label="Terminal" value="03" />
              <Info label="Portão" value="32" />
            </View>
          </View>

          <QRCode value="boarding code" size={130} />
        </View>
      </View>
    </View>
  );
}
