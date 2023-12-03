import React, { useCallback, memo, useRef, useState } from "react";
import {
    FlatList,
    View,
    Dimensions,
    Text,
    StyleSheet,
    Image,
} from "react-native";
export default function IntroComp({ navigation }) {
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    const styles = StyleSheet.create({
        slide: { height: windowHeight, width: windowWidth, justifyContent: "center", alignItems: "center", },
        pagination: { position: "absolute", bottom: 60, width: "100%", justifyContent: "center", flexDirection: "row", },
        paginationDot: { width: 20, height: 8, borderRadius: 4, marginHorizontal: 2, },
        paginationDotActive: { backgroundColor: "#FDD64D" },
        paginationDotInactive: { backgroundColor: "#EEEEEE" },
        carousel: { flex: 1 },
    });

    const slideList = [{
        id: 1,
        image: require('../../assets/images/intro-1.png'),
        title: `Welcome to DailyFit`,
        subtitle: `Best free workout application for regular fitness training`,
    },
    {
        id: 2,
        image: require('../../assets/images/intro-2.png'),
        title: `Record your workouts`,
        subtitle: 'Best mobile application for regular fitness training',
    },
    {
        id: 3,
        image: require('../../assets/images/intro-3.png'),
        title: 'Welcome to DailyFit',
        subtitle: 'Best mobile application for regular fitness training',
    },
    ]

    const Slide = memo(function Slide({ data }) {
        return (
            <View style={styles.slide}>
                <Image source={data.image} />
                <View style={{ paddingHorizontal: 20, alignItems: "center", marginVertical: 50 }}>
                    <Text style={{ fontSize: 24, fontFamily: 'Pop600', color: "#303030" }}>{data.title}</Text>
                    <Text style={{ fontSize: 16, fontFamily: "Pop400", textAlign: "center", lineHeight: 24, color: "#838383" }}>{data.subtitle}</Text>
                </View>
            </View>
        );
    });

    function Pagination({ index }) {
        return (
            <View style={styles.pagination} pointerEvents="none">
                {slideList.map((_, i) => {
                    return (
                        <View key={i} style={[styles.paginationDot, index === i ? styles.paginationDotActive : styles.paginationDotInactive,]} />
                    );
                })}
            </View>
        );
    }
    const [index, setIndex] = useState(0);
    const indexRef = useRef(index);
    indexRef.current = index;
    const onScroll = useCallback((event) => {
        const slideSize = event.nativeEvent.layoutMeasurement.width;
        const index = event.nativeEvent.contentOffset.x / slideSize;
        const roundIndex = Math.round(index);
        const distance = Math.abs(roundIndex - index);
        const isNoMansLand = 0.4 < distance;

        if (roundIndex !== indexRef.current && !isNoMansLand) {
            setIndex(roundIndex);
        }
    }, []);

    const flatListOptimizationProps = {
        initialNumToRender: 0,
        maxToRenderPerBatch: 1,
        removeClippedSubviews: true,
        scrollEventThrottle: 16,
        windowSize: 2,
        keyExtractor: useCallback(s => String(s.id), []),
        getItemLayout: useCallback(
            (_, index) => ({
                index,
                length: windowWidth,
                offset: index * windowWidth,
            }),
            []
        ),
    };

    const renderItem = useCallback(function renderItem({ item }) {
        return <Slide data={item} />;
    }, []);
    return (
        <>
            <FlatList
                data={slideList}
                style={styles.carousel}
                renderItem={renderItem}
                pagingEnabled
                horizontal
                showsHorizontalScrollIndicator={false}
                bounces={false}
                onScroll={onScroll}
                {...flatListOptimizationProps}
                contentContainerStyle={{ backgroundColor: "white" }}
            />
            <Pagination index={index} />
        </>
    )
}

