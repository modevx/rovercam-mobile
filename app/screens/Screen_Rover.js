// >> Hooks
// import { useEffect, useState } from "react";
// >> CORE Components
import { StyleSheet, Text, View } from "react-native";
// >> MDX Components
import Img_Background from "../components/mdx-core/Img_Background";
import List_Cameras from "../components/List_Cameras";
import RoverInfo from "../components/RoverInfo";
import Text_Title from "../components/mdx-core/Text_Title";
import View_ContentWrapper from "../components/mdx-core/View_ContentWrapper";
// >> Utils
import { CAMERAS, IMG_PATHS } from "../site-data";
import { useFetchRoverManifest } from "../hooks/use-manifest";

const RoverScreen = ({ navigation }) => {
	const rover = navigation.getParam("rover");

	const { manifest } = useFetchRoverManifest(rover);

	if (!manifest) return;

	let { name, launch_date, landing_date, max_date, total_photos } = manifest;

	return (
		<Img_Background imgSrc={IMG_PATHS[rover]} opacity={0.5}>
			<View_ContentWrapper>
				<Text_Title>{name}</Text_Title>
				<RoverInfo manifest={manifest} />
				{/* <List_Cameras cameras={CAMERAS[rover]} /> */}
			</View_ContentWrapper>
		</Img_Background>
	);
};

export default RoverScreen;

const S = StyleSheet.create({
	camera: {
		borderColor: "#fff",
		borderWidth: 2,
		padding: 10,
		marginVertical: 15,
	},
	cameras: {
		alignItems: "center",
	},
	screen: {
		flex: 1,
		padding: 15,
	},
	RoverInfo: {
		paddingBottom: 15,
	},
});
