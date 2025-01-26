import React, { useCallback, useRef, useState } from 'react';
import { HexColorPicker } from 'react-colorful';
import { useColor } from '../contexts/SketchContext';
import useClickOutside from '../hooks/useClickOutside';

const ColorPicker = () => {
    const popover = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const { colorRef, updateColor } = useColor();

    const close = useCallback(() => setIsOpen(false), []);
    useClickOutside(popover, close); // Pass the typed ref

    return (
        <div className="picker relative">
            <button
                className="swatch w-[50px] h-[50px] rounded-full"
                style={{ backgroundColor: colorRef.current }}
                onClick={() => setIsOpen(true)}
            />

            {isOpen && (
                <div
                    className="popover absolute z-1 right-0 top-5"
                    ref={popover}
                >
                    <HexColorPicker
                        color={colorRef.current}
                        onChange={(e) => updateColor(e)}
                    />
                </div>
            )}
        </div>
    );
};

export default ColorPicker;
