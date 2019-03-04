import {ENV} from "../../Environment";

const ChangeColorTypeAssistance = (tipo) => {
    switch (tipo) {
        case ENV.ASSISTANCE_TYPES.type1:
            return ENV.ASSISTANCE_TYPES_COLOR.type1;
        case ENV.ASSISTANCE_TYPES.type2:
            return ENV.ASSISTANCE_TYPES_COLOR.type2;
        case  ENV.ASSISTANCE_TYPES.type3:
            return ENV.ASSISTANCE_TYPES_COLOR.type3;
        case  ENV.ASSISTANCE_TYPES.type4:
            return ENV.ASSISTANCE_TYPES_COLOR.type4;
        case  ENV.ASSISTANCE_TYPES.type5:
            return ENV.ASSISTANCE_TYPES_COLOR.type5;
    }
};

export {ChangeColorTypeAssistance}