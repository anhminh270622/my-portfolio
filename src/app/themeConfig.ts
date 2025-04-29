import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: '#52c41a',
    colorText: '#ffffff',
    colorBgBase: '#101d3c',
  },
    components: {
        Button: {
            colorPrimary: '#52c41a',
            colorText: '#ffffff',
        },
    },
};

export default theme;