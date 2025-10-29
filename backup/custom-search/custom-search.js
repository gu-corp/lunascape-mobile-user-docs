export default function customSearchPlugin() {
  return {
    name: 'custom-search-plugin',
    getClientModules() {
      return [require.resolve('../theme/custom-search-init')];
    },
  };
}
