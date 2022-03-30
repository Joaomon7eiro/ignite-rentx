import React, { useRef, useState } from 'react';
import { FlatList, ViewToken } from 'react-native';

import {
  Container,
  ImageIndexes,
  ImageIndex,
  CarImageWrapper,
  CarImage,
} from './styles';

interface Props {
  imagesUrl: string[];
}

interface ChangeImageProps {
  viewableItems: ViewToken[];
  changed: ViewToken[];
}

export function ImageSlider({ imagesUrl }: Props) {
  const [viewableImageIndex, setViewableImageIndex] = useState(0);

  const indexChanged = useRef((info: ChangeImageProps) => {
    const index = info.viewableItems[0].index!;
    setViewableImageIndex(index);
  });

  return (
    <Container>
      <ImageIndexes>
        {imagesUrl.map((_, index) => <ImageIndex key={index} active={viewableImageIndex === index} />)}
      </ImageIndexes>

        <FlatList
          data={imagesUrl}
          keyExtractor={image => image}
          horizontal
          showsHorizontalScrollIndicator={false}
          onViewableItemsChanged={indexChanged.current}
          renderItem={({ item }) =>
            <CarImageWrapper>
              <CarImage
              source={{ uri: item }}
              resizeMode="contain"
              />
            </CarImageWrapper>
          }
        />

    </Container>
  );
}
