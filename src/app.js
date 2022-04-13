const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch(
  'JBEQ5J8837',
  '70a9125e18e8b0056750fd12c801b652'
);

const search = instantsearch({
  indexName: 'Grammys',
  searchClient,
});

search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
	placeholder: 'Enter a year, name, or award to search'
  }),
  instantsearch.widgets.clearRefinements({
    container: '#clear-refinements',
  }),
instantsearch.widgets.rangeSlider({
    container: '#year-range',
    attribute: 'annualGrammy',
  }),
  
  instantsearch.widgets.refinementList({
    container: '#cat-list',
    attribute: 'category',
  }),


  instantsearch.widgets.configure({
    hitsPerPage: 20
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: `
        <div>    
			<div class="hit-year">
			{{#helpers.highlight}}{ "attribute": "annualGrammy" }{{/helpers.highlight}}
			</div>
			<div class="hit-category">
            {{#helpers.highlight}}{ "attribute": "category" }{{/helpers.highlight}}
          </div>
          <div class="hit-detail">
            <b>{{#helpers.highlight}}{ "attribute": "name" }{{/helpers.highlight}} </b> for <b>{{#helpers.highlight}}{ "attribute": "awardFor" }{{/helpers.highlight}}</b>
          </div>
          
          
        </div>
      `,
    },
  }),
  instantsearch.widgets.configure({
    facets: ['*'],
    maxValuesPerFacet: 20,
  }),
  instantsearch.widgets.dynamicWidgets({
    container: '#dynamic-widgets',
    fallbackWidget({ container, attribute }) {
      return instantsearch.widgets.refinementList({
        container,
        attribute,
      });
    },
    widgets: [],
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();
