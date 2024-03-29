import React from 'react';
import {View, StyleSheet} from 'react-native';

import Field from './Field';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEE',
  },
  line: {
    flexDirection: 'row',
  },
});

const MineField = props => {
  const rows = props.board.map((row, r) => {
    const columns = row.map((field, c) => {
      return (
        <Field
          {...field}
          key={c}
          onOpen={() => props.onOpenField(r, c)}
          onSelect={e => props.onSelectField(r, c)}
        />
      );
    });
    return (
      <View style={styles.line} key={r}>
        {columns}
      </View>
    );
  });
  return <View style={styles.container}>{rows}</View>;
};

export default MineField;
