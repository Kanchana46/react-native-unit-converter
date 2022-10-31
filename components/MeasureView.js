import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import convert from 'convert-units';
import { Picker } from '@react-native-picker/picker';

const MeasureView = ({ measure, value, setValue }) => {
    const units = convert().possibilities(measure);
    const [fromUnit, setFromUnit] = useState(units[0]);
    const [toUnit, setToUnit] = useState(units[1]);
    const [valueConverted, setValueConverted] = useState(0);

    useEffect(() => {
        setValueConverted(convert(+value).from(fromUnit).to(toUnit).toFixed(2))
    }, [value, fromUnit, toUnit]);

    return (
        <View style={styles.scene}>
            <View style={styles.row}>
                <Picker style={styles.column} selectedValue={fromUnit} onValueChange={setFromUnit}>
                    {units.map((unit, index) => (
                        <Picker.Item
                            label={unit}
                            value={unit}
                            key={index}
                        />
                    ))}
                </Picker>
                <View style={styles.column}>
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        keyboardType="numeric"
                        style={styles.input} />
                </View>
            </View>
            <View style={styles.row}>
                <Picker style={styles.column} selectedValue={toUnit} onValueChange={setToUnit}>
                    {units.map((unit, index) => (
                        <Picker.Item
                            label={unit}
                            value={unit}
                            key={index}
                        />
                    ))}
                </Picker>
                <View style={styles.column}>
                    <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
                        {valueConverted}{' '}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    scene: {
        flex: 1
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    column: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20
    },
    input: {
        height: 40,
        borderColor: '#052F5F',
        borderBottomWidth: 1,
        fontSize: 30,
        textAlign: 'center'
    }
});


export default MeasureView;