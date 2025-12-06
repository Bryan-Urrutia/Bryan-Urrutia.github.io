

"use client";

interface FlorProps {
	flor:  string;
	color?: string;
	dot_color?: string;
}


const Flores = ({ flor = '', color = "#000", dot_color = '#000' }: FlorProps) => {
    return (
        <div className='-z-10 hidden lg:inline'>
            {flor === 'flor1' && (
                <div className="flex justify-center items-center">
                    <div className="flower">
                        <div className="gira">
                            <div
                                className="girasol leaf leaf-0"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-1"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-2"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-3"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-4"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-5"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-6"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-7"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-8"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-9"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-10"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-11"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-12"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-13"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-14"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol leaf leaf-15"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="girasol dot"
                                style={{ ["--dot_color" as any]: dot_color }}
                            ></div>
                        </div>
                        <div className="stem">
                            <div className="stemleaf leaf-0"></div>
                            <div className="stemleaf leaf-1"></div>
                        </div>
                        <div className="glass-group">
                            <div className="glass glass-1"></div>
                            <div className="glass glass-2"></div>
                            <div className="glass glass-3"></div>
                            <div className="glass glass-4"></div>
                            <div className="glass glass-5"></div>
                            <div className="glass glass-6"></div>
                        </div>
                    </div>
                </div>
            )}
            {flor === 'flor2' && (
                <div className="flex justify-center items-center">
                    <div className="flower">
                        <div className="gira">
                            <div
                                className="tulipan leaf leaf-0"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf leaf-1"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf leaf-2"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf leaf-3"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf leaf-4"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf leaf-5"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf leaf-6"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf2 leaf-7"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf2 leaf-8"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf2 leaf-9"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf2 leaf-10"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf2 leaf-11"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf2 leaf-12"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="tulipan leaf2 leaf-13"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                        </div>
                        <div className="stem">
                            <div className="stemleaf leaf-0"></div>
                            <div className="stemleaf leaf-1"></div>
                        </div>
                        <div className="glass-group">
                            <div className="glass glass-1"></div>
                            <div className="glass glass-2"></div>
                            <div className="glass glass-3"></div>
                            <div className="glass glass-4"></div>
                            <div className="glass glass-5"></div>
                            <div className="glass glass-6"></div>
                        </div>
                    </div>
                </div>
            )}
            {flor === 'flor3' && (
                <div className="flex justify-center items-center">
                    <div className="flower">
                        <div className="gira">
                            <div
                                className="flor3 leaf leaf-0"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-1"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-2"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-3"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-4"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-5"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-6"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-7"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-8"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-9"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-10"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-11"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-12"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-13"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-14"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 leaf leaf-15"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor3 dot"
                                style={{ ["--dot_color" as any]: dot_color }}
                            ></div>
                        </div>
                        <div className="stem">
                            <div className="stemleaf leaf-0"></div>
                            <div className="stemleaf leaf-1"></div>
                        </div>
                        <div className="glass-group">
                            <div className="glass glass-1"></div>
                            <div className="glass glass-2"></div>
                            <div className="glass glass-3"></div>
                            <div className="glass glass-4"></div>
                            <div className="glass glass-5"></div>
                            <div className="glass glass-6"></div>
                        </div>
                    </div>
                </div>
            )}
            {flor === 'flor4' && (
                <div className="flex justify-center items-center">
                    <div className="flower">
                        <div className="gira">
                            <div
                                className="flor4 leaf leaf-0"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf leaf-1"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf leaf-2"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf leaf-3"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf leaf-4"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf leaf-5"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf2 leaf-0"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf2 leaf-1"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf2 leaf-2"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf2 leaf-3"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf2 leaf-4"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 leaf2 leaf-5"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor4 dot"
                                style={{ ["--dot_color" as any]: color }}
                            ></div>
                        </div>
                        <div className="stem">
                            <div className="stemleaf leaf-0"></div>
                            <div className="stemleaf leaf-1"></div>
                        </div>
                        <div className="glass-group">
                            <div className="glass glass-1"></div>
                            <div className="glass glass-2"></div>
                            <div className="glass glass-3"></div>
                            <div className="glass glass-4"></div>
                            <div className="glass glass-5"></div>
                            <div className="glass glass-6"></div>
                        </div>
                    </div>
                </div>
            )}
            {flor === 'flor5' && (
                <div className="flex justify-center items-center">
                    <div className="flower">
                        <div className="gira">
                            <div
                                className="heart leaf-0"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="heart leaf-1"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="heart leaf-2"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="heart leaf-3"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor5 dot"
                                style={{ ["--dot_color" as any]: dot_color }}
                            ></div>
                        </div>
                        <div className="flor5 stem">
                            <div className="stemleaf leaf-0"></div>
                            <div className="stemleaf leaf-1"></div>
                        </div>
                        <div className="glass-group">
                            <div className="glass glass-1"></div>
                            <div className="glass glass-2"></div>
                            <div className="glass glass-3"></div>
                            <div className="glass glass-4"></div>
                            <div className="glass glass-5"></div>
                            <div className="glass glass-6"></div>
                        </div>
                    </div>
                </div>
            )}
            {flor === 'flor6' && (
                <div className="flex justify-center items-center">
                    <div className="flower">
                        <div className="gira">
                            <div
                                className="flor6 leaf leaf-0"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-1"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-2"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-3"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-4"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-5"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-6"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-7"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-8"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-9"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-10"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-11"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-12"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-13"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-14"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor6 leaf leaf-15"
                                style={{ ["--leaf_color" as any]: color }}
                            ></div>
                            <div
                                className="flor5 dot"
                                style={{ ["--dot_color" as any]: dot_color }}
                            ></div>
                        </div>
                        <div className="flor5 stem">
                            <div className="stemleaf leaf-0"></div>
                            <div className="stemleaf leaf-1"></div>
                        </div>
                        <div className="glass-group">
                            <div className="glass glass-1"></div>
                            <div className="glass glass-2"></div>
                            <div className="glass glass-3"></div>
                            <div className="glass glass-4"></div>
                            <div className="glass glass-5"></div>
                            <div className="glass glass-6"></div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Flores;