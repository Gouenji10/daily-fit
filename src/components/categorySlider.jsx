import React, { useCallback, memo, useRef, useState } from "react";
import {
    FlatList,
    View,
    Dimensions,
    Text,
    StyleSheet,
    Image,
} from "react-native";

export default function CategorySlider() {
    const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

    const styles = StyleSheet.create({
        slide: { height: 150, width: windowWidth, justifyContent: "center", alignItems: "center", },
        pagination: { position: "absolute", bottom: 20, width: "100%", justifyContent: "center", flexDirection: "row", },
        paginationDot: { width: 20, height: 5, borderRadius: 4, marginHorizontal: 2, },
        paginationDotActive: { backgroundColor: "#FDD64D" },
        paginationDotInactive: { backgroundColor: "#EEEEEE" },
        carousel: { flex: 1, flexWrap: "wrap" },
    });

    const slideList = [{
        id: 1,
        items: [
            {
                title: "Gym Cardio",
                image: require('../../assets/images/cat-1.png'),
            },
            {
                title: "Gym Traning",
                image: require('../../assets/images/cat-2.png'),
            },
            {
                title: "Indoor Activity",
                image: require('../../assets/images/cat-3.png'),
            }
        ]
    },
    {
        id: 2,
        items: [
            {
                title: "Gym Cardio",
                image: require('../../assets/images/cat-1.png'),
            },
            {
                title: "Gym Traning",
                image: require('../../assets/images/cat-2.png'),
            },
            {
                title: "Indoor Activity",
                image: require('../../assets/images/cat-3.png'),
            }
        ]
    },
    {
        id: 3,
        items: [
            {
                title: "Gym Cardio",
                image: require('../../assets/images/cat-1.png'),
            },
            {
                title: "Gym Traning",
                image: require('../../assets/images/cat-2.png'),
            },
            {
                title: "Indoor Activity",
                image: require('../../assets/images/cat-3.png'),
            }
        ]
    },
    {
        id: 4,
        items: [
            {
                title: "Gym Cardio",
                image: require('../../assets/images/cat-1.png'),
            },
            {
                title: "Gym Traning",
                image: require('../../assets/images/cat-2.png'),
            },
            {
                title: "Indoor Activity",
                image: require('../../assets/images/cat-3.png'),
            }
        ]
    },
    ]

    const Slide = memo(function Slide({ data }) {
        return (
            <View style={[styles.slide, { flexDirection: "row" }]}>
                {data?.items.map((item, index) => {
                    return (
                        <View
                            key={index}
                            style={{
                                width: '30%',
                                height: 80,
                                marginHorizontal: 5,
                                alignItems: "center",
                                justifyContent: "space-between"
                            }}
                        >
                            <Image source={item.image} style={{ width: 50, height: 50, objectFit: "contain" }} />
                            <Text
                                style={{
                                    fontSize: 14,
                                    fontFamily: 'Pop500',
                                    color: "#9999B5"
                                }}
                            >
                                {item.title}
                            </Text>
                        </View>
                    )
                })}
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
