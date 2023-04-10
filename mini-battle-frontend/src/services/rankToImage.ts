

export const rankToImage = (rank:string):string => {
    switch(rank){
      case "berserker":
        return "bg-berserker"
      case "thrall":
        return "bg-thrall"
      case "jarl": 
        return "bg-jarl"
      default:
        return "bg-berserker"
    }
}
