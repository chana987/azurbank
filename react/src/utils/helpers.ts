import { Currency } from 'utils/types';
import type { MRT_Localization } from 'material-react-table';

export const MRT_Localization_HE: MRT_Localization = {
	actions: 'פעולות',
	and: 'וגם',
	cancel: 'ביטול',
	changeFilterMode: 'Change filter mode',
	changeSearchMode: 'Change search mode',
	clearFilter: 'איפוס סינון',
	clearSearch: 'ניקוי חיפוש',
	clearSort: 'איפוס מיון',
	clickToCopy: 'Click to copy',
	collapse: 'Collapse',
	collapseAll: 'Collapse all',
	columnActions: 'Column Actions',
	copiedToClipboard: 'Copied to clipboard',
	dropToGroupBy: 'Drop to group by {column}',
	edit: 'Edit',
	expand: 'הרחב',
	expandAll: 'הרחב הכל',
	filterArrIncludes: 'Includes',
	filterArrIncludesAll: 'Includes all',
	filterArrIncludesSome: 'Includes',
	filterBetween: 'בין',
	filterBetweenInclusive: 'בין כולל',
	filterByColumn: 'סינון לפי {column}',
	filterContains: 'מכיל',
	filterEmpty: 'ריק',
	filterEndsWith: 'מסתיים ב',
	filterEquals: 'שווה',
	filterEqualsString: 'שווה',
	filterFuzzy: 'קירוב',
	filterGreaterThan: 'גדול מ',
	filterGreaterThanOrEqualTo: 'גדול מ או שווה ל',
	filterInNumberRange: 'בין',
	filterIncludesString: 'מכיל',
	filterIncludesStringSensitive: 'מכיל',
	filterLessThan: 'פחות מ',
	filterLessThanOrEqualTo: 'פחות מ או שווה ל',
	filterMode: 'סוג פילטור: {filterType}',
	filterNotEmpty: 'לא ריק',
	filterNotEquals: 'לא שווה',
	filterStartsWith: 'מתחיל ב',
	filterWeakEquals: 'שווה',
	filteringByColumn: 'מסנן לפי {column} - {filterType} {filterValue}',
	goToFirstPage: 'לדף הראשון',
	goToLastPage: 'לדף האחרון',
	goToNextPage: 'לדף הבא',
	goToPreviousPage: 'לדף הקודם',
	grab: 'Grab',
	groupByColumn: 'Group by {column}',
	groupedBy: 'Grouped by ',
	hideAll: 'Hide all',
	hideColumn: 'הסתרת עמודת {column}',
	max: 'מינימום',
	min: 'מקסימום',
	move: 'Move',
	noRecordsToDisplay: 'אין מידע להציג',
	noResultsFound: 'אין תוצאות',
	of: 'מתוך',
	or: 'או',
	pinToLeft: 'Pin to left',
	pinToRight: 'Pin to right',
	resetColumnSize: 'Reset column size',
	resetOrder: 'איפוס סדר',
	rowActions: 'פעולות',
	rowNumber: '#',
	rowNumbers: 'מספר שורה',
	rowsPerPage: 'שורות לעמוד',
	save: 'שמירה',
	search: 'חיפוש',
	selectedCountOfRowCountRowsSelected:
    '{selectedCount} מתוך {rowCount} שורות נבחרו',
	select: 'בחירה',
	showAll: 'הצגת הכל',
	showAllColumns: 'הצגת כל העמודות',
	showHideColumns: 'הצגת/הסתרת עמודות',
	showHideFilters: 'הצגת/הסתרת סינונים',
	showHideSearch: 'הצגת/הסתרת חיפוש',
	sortByColumnAsc: 'מיון לפי {column} בסדר עולה',
	sortByColumnDesc: 'מיון לפי {column} בסדר יורד',
	sortedByColumnAsc: 'ממוין לפי {column} בסדר עולה',
	sortedByColumnDesc: 'ממוין לפי {column} בסדר יורד',
	thenBy: ', ואז לפי ',
	toggleDensity: 'Toggle density',
	toggleFullScreen: 'מסך מלא',
	toggleSelectAll: 'Toggle select all',
	toggleSelectRow: 'Toggle select row',
	toggleVisibility: 'Toggle visibility',
	ungroupByColumn: 'Ungroup by {column}',
	unpin: 'Unpin',
	unpinAll: 'Unpin all',
	unsorted: 'Unsorted',
};

export const convertCurrency = (value: number, from: Currency, to: Currency) => {
	if (from === to) {
		return value;
	}
  
	if (from === Currency.ILS) {
		return value / 3.5;
	}

	return value * 3.5;
};

export const formatShekel = (value: number) => {
	return `₪${value.toFixed(2)}`;
};
