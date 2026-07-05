// No Results Component
const NoResults = ({ query }: { query: string }) => (
  <div className="text-center py-8">
    <p className="text-gray-500 mb-2">
      Aucun résultat trouvé pour{" "}
      <span className="font-medium text-green-pea/80">"{query}"</span>
    </p>
    <p className="text-sm text-gray-400">
      Essayez d'ajuster votre recherche. Voici quelques suggestions :
    </p>
    <ul className="text-sm text-gray-400 mt-2">
      <li>• Essayez des mots-clés plus généraux</li>
      <li>• Essayez des mots-clés différents</li>
      <li>• Vérifiez l'orthographe des mots</li>
    </ul>
  </div>
);

export default NoResults;
